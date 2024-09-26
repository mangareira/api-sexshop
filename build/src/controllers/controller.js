"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    constructor(snackService, orderService, checkoutService) {
        this.snackService = snackService;
        this.orderService = orderService;
        this.checkoutService = checkoutService;
    }
    async findSnacks(req, res, next) {
        const { name_icon } = req.query;
        try {
            const result = await this.snackService.findSnacks(String(name_icon));
            res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    }
    async findOrderById(req, res, next) {
        const { id } = req.params;
        try {
            const result = await this.orderService.findOrderById(Number(id));
            res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    }
    async checkout(req, res, next) {
        const { cart, customer, payment } = req.body;
        try {
            const result = await this.checkoutService.process(cart, customer, payment);
            return res.status(200).json(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.Controller = Controller;
