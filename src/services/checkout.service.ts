import { CustomerDTO } from "../lib/types/customerDTO";
import { PaymentDTO } from "../lib/types/paymentDTO";
import { SnackDTO } from "../lib/types/snackDTO";
import { CustomerRespository } from "../repositorys/customer/customer.respository";
import { OrderRepository } from "../repositorys/order/order.repository";
import { SnackRepository } from "../repositorys/snack/snack.repository";
import { PaymentService } from "./payment.service";

export class CheckoutService {
    constructor(
        private snackRespository: SnackRepository,
        private customerRespository: CustomerRespository,
        private orderRespository: OrderRepository,
        private paymentService: PaymentService
    ) {}

    async process(cart: SnackDTO[], customer: CustomerDTO, payment: PaymentDTO) {
        const snacks = await this.snackRespository.getSnackCart(cart)
        const snackCart = snacks.map<SnackDTO>((snack) => ({
            ...snack,
            price: Number(snack.price),
            quantity: cart.find((item) => item.id === snack.id)?.quantity!,
            subTotal: cart.find((item) => item.id === snack.id)?.quantity! * Number(snack.price),
        }))
        const customerCreated = await this.customerRespository.createIfNotExists(customer)
        let orderCreated = await this.orderRespository.create(snackCart, customerCreated)
        const {status, transactionId} = await this.paymentService.process(orderCreated, customerCreated, payment)

        orderCreated = await this.orderRespository.update(orderCreated, transactionId, status)
        return {
            id: orderCreated.id,
            status,
            transactionId,
        }
    }
}