"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const httpException_1 = require("../lib/interfaces/httpException");
class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async findOrderById(id) {
        if (!id)
            throw new httpException_1.HttpException(400, "Id is require");
        const result = await this.orderRepository.findById(id);
        if (!result)
            throw new httpException_1.HttpException(400, "Order not found");
        return result;
    }
}
exports.OrderService = OrderService;
