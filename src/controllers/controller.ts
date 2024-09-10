import { NextFunction, Request, Response } from "express";
import { SnackService } from "../services/snack.service";
import { OrderService } from "../services/order.service";
import { CheckoutRequest } from "../lib/interfaces/checkoutRequest";
import { CheckoutService } from "../services/checkout.service";

export class Controller {
    constructor(
        private snackService: SnackService, 
        private orderService: OrderService, 
        private checkoutService: CheckoutService
    ){}

    async findSnacks(req: Request, res: Response, next: NextFunction) {
        const { name_icon } = req.query
        try {
            const result = await this.snackService.findSnacks(String(name_icon))
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async findOrderById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        try {
            const result = await this.orderService.findOrderById(Number(id))
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async checkout(req: CheckoutRequest, res: Response, next: NextFunction) {
        const { cart, customer, payment } = req.body
        try {
            const result = await this.checkoutService.process(cart, customer, payment)
            return res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
}