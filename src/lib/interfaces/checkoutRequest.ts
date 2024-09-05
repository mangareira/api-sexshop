import { Request } from "express"
import { SnackDTO } from "../types/snackDTO"
import { CustomerDTO } from "../types/customerDTO"
import { PaymentDTO } from "../types/paymentDTO"

export interface CheckoutRequest extends Request {
    body: {
        cart: SnackDTO[]
        customer: CustomerDTO
        payment: PaymentDTO
    }
} 