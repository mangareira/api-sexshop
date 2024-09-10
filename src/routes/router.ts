import { Router } from "express";
import { SnackRepository } from "../repositorys/snack/snack.repository";
import { SnackService } from "../services/snack.service";
import { Controller } from "../controllers/controller";
import { OrderService } from "../services/order.service";
import { OrderRepository } from "../repositorys/order/order.repository";
import { CheckoutService } from "../services/checkout.service";
import { CustomerRespository } from "../repositorys/customer/customer.respository";
import { PaymentService } from "../services/payment.service";

export class Routes {
    public router: Router
    private controller: Controller
    constructor() {
        this.router = Router()
        const snackRepository = new SnackRepository()
        const orderRepository = new OrderRepository()
        const customerRespository = new CustomerRespository()
        const snackService = new SnackService(snackRepository)
        const orderService = new OrderService(orderRepository)
        const paymentService = new PaymentService()
        const checkoutService = new CheckoutService(snackRepository, customerRespository, orderRepository, paymentService)
        this.controller = new Controller(snackService, orderService, checkoutService)
        this.initRouter()
    }

    initRouter() {
        this.router.get("/orders/:id", this.controller.findOrderById.bind(this.controller))
        this.router.get("/coisado", this.controller.findSnacks.bind(this.controller))
        this.router.post("/checkout", this.controller.checkout.bind(this.controller))
    }
}