import { Customer, Order, OrderItem, OrderStatus, Snack } from "@prisma/client"
import { SnackDTO } from "../../lib/types/snackDTO"

export interface OrderRepositoryDTO {
    findById(id: number): Promise<(Order & { OrderItem: (OrderItem & { snack: Snack })[] } & { customer: Customer }) | null>
    create(snackCart: SnackDTO[], customer: Customer): Promise <(Order & { OrderItem: (OrderItem & { snack: Snack })[] } & { customer: Customer })>
    update(order: Order, transactionId: string, status: OrderStatus): Promise<Order>
}