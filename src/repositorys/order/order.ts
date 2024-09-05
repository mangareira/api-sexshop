import { Customer, Order, OrderStatus } from "@prisma/client"
import { SnackDTO } from "../../lib/types/snackDTO"

export interface OrderRepositoryDTO {
    findById(id: number): Promise<any>
    create(snackCart: SnackDTO[], customer: Customer): Promise <Order>
    update(order: Order, transactionId: string, status: OrderStatus): Promise<Order>
}