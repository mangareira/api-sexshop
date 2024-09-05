import { OrderRepositoryDTO } from "./order";
import { prisma } from "../../lib/prisma";
import { Customer, Order, OrderStatus } from "@prisma/client";
import { SnackDTO } from "../../lib/types/snackDTO";

export class OrderRepository implements OrderRepositoryDTO{
    async findById(id: number): Promise<any> {
        const result = await prisma.order.findUnique({
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
        })
        return result
    }
    async create(snackCart: SnackDTO[], customer: Customer): Promise<Order> {
        const result = await prisma.order.create({
            data: {
                total: snackCart.reduce((acc,snack) => acc + snack.subTotal, 0),
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
        })
        return result
    }
    async update(order: Order, transactionId: string, status: OrderStatus): Promise<Order> {
        const result = await prisma.order.update({
            where: {
                id: order.id
            },
            data: {
                transactionId,
                status,
            }
        })
        return result
    }

}