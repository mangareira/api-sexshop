import { HttpException } from "../lib/interfaces/httpException";
import { OrderRepository } from "../repositorys/order/order.repository";

export class OrderService {
    constructor (private orderRepository: OrderRepository) {}

    async findOrderById(id: number) {
        if(!id) throw new HttpException(400, "Id is require")
        const result = await this.orderRepository.findById(id)
        if(!result) throw new HttpException(400, "Order not found")
        return result
    }
}