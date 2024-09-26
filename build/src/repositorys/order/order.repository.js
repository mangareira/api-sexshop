"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const prisma_1 = require("../../lib/prisma");
class OrderRepository {
    async findById(id) {
        const result = await prisma_1.prisma.order.findUnique({
            where: {
                id,
            },
            include: {
                customer: true,
                OrderItem: {
                    include: {
                        snack: true
                    }
                }
            }
        });
        return result;
    }
    async create(snackCart, customer) {
        const result = await prisma_1.prisma.order.create({
            data: {
                total: snackCart.reduce((acc, snack) => acc + snack.subTotal, 0),
                customer: {
                    connect: {
                        id: customer.id
                    }
                },
                OrderItem: {
                    createMany: {
                        data: snackCart.map((snack) => ({
                            quantity: snack.quantity,
                            subTotal: snack.subTotal,
                            snackId: snack.id
                        }))
                    }
                }
            },
            include: {
                customer: true,
                OrderItem: {
                    include: {
                        snack: true
                    }
                }
            }
        });
        return result;
    }
    async update(order, transactionId, status) {
        const result = await prisma_1.prisma.order.update({
            where: {
                id: order.id
            },
            data: {
                transactionId,
                status,
            },
            include: {
                OrderItem: {
                    include: {
                        snack: true
                    }
                },
                customer: true
            }
        });
        return result;
    }
}
exports.OrderRepository = OrderRepository;
