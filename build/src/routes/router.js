"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const snack_repository_1 = require("../repositorys/snack/snack.repository");
const snack_service_1 = require("../services/snack.service");
const controller_1 = require("../controllers/controller");
const order_service_1 = require("../services/order.service");
const order_repository_1 = require("../repositorys/order/order.repository");
const checkout_service_1 = require("../services/checkout.service");
const customer_respository_1 = require("../repositorys/customer/customer.respository");
const payment_service_1 = require("../services/payment.service");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        const snackRepository = new snack_repository_1.SnackRepository();
        const orderRepository = new order_repository_1.OrderRepository();
        const customerRespository = new customer_respository_1.CustomerRespository();
        const snackService = new snack_service_1.SnackService(snackRepository);
        const orderService = new order_service_1.OrderService(orderRepository);
        const paymentService = new payment_service_1.PaymentService();
        const checkoutService = new checkout_service_1.CheckoutService(snackRepository, customerRespository, orderRepository, paymentService);
        this.controller = new controller_1.Controller(snackService, orderService, checkoutService);
        this.initRouter();
    }
    initRouter() {
        this.router.get("/orders/:id", this.controller.findOrderById.bind(this.controller));
        this.router.get("/coisado", this.controller.findSnacks.bind(this.controller));
        this.router.post("/checkout", this.controller.checkout.bind(this.controller));
    }
}
exports.Routes = Routes;
