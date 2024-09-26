"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutService = void 0;
class CheckoutService {
    constructor(snackRespository, customerRespository, orderRespository, paymentService) {
        this.snackRespository = snackRespository;
        this.customerRespository = customerRespository;
        this.orderRespository = orderRespository;
        this.paymentService = paymentService;
    }
    async process(cart, customer, payment) {
        const snacks = await this.snackRespository.getSnackCart(cart);
        const snackCart = snacks.map((snack) => ({
            ...snack,
            price: Number(snack.price),
            quantity: cart.find((item) => item.id === snack.id)?.quantity,
            subTotal: cart.find((item) => item.id === snack.id)?.quantity * Number(snack.price),
        }));
        const customerCreated = await this.customerRespository.createIfNotExists(customer);
        let orderCreated = await this.orderRespository.create(snackCart, customerCreated);
        const { status, transactionId, qrCode, expiration, payload } = await this.paymentService.process(orderCreated, customerCreated, payment);
        orderCreated = await this.orderRespository.update(orderCreated, transactionId, status);
        if (qrCode) {
            return {
                id: orderCreated.id,
                status,
                transactionId,
                qrCode,
                expiration,
                payload
            };
        }
        return {
            id: orderCreated.id,
            status,
            transactionId,
        };
    }
}
exports.CheckoutService = CheckoutService;
