import { OrderRepositoryDTO } from "./order";
import { prisma } from "../../lib/prisma";
import { Customer, Order, OrderItem, OrderStatus, Snack } from "@prisma/client";
import { SnackDTO } from "../../lib/types/snackDTO";

export class OrderRepository implements OrderRepositoryDTO{
    async findById(id: number): Promise<(Order & { OrderItem: (OrderItem & { snack: Snack })[] } & { customer: Customer }) | null> {
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
    async create(snackCart: SnackDTO[], customer: Customer): Promise<(Order & { OrderItem: (OrderItem & { snack: Snack })[] } & { customer: Customer })> {
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
    async update(order: Order, transactionId: string, status: OrderStatus): Promise<(Order & { OrderItem: (OrderItem & { snack: Snack })[] } & { customer: Customer })> {
        const result = await prisma.order.update({
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
        })
        return result
    }

}