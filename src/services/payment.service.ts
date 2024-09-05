import { Customer, Order, OrderStatus } from "@prisma/client";
import { PaymentDTO } from "../lib/types/paymentDTO";
import { Api } from "../lib/api";
import { CustomerAsaasDTO, RequestCustomer } from "../lib/types/requestCustomer";
import { CreateCustomer } from "../lib/types/createCustomer";

export class PaymentService {
    private api: Api
    constructor() {
        this.api = new Api
    }
    async process(
        order: Order, 
        customer: Customer, 
        payment: PaymentDTO
    ) {
        try {
            const customerId = await this.createCustomer(customer)
            const transaction = await this.createTransaction(customerId, order, customer, payment)
            return {
                transactionId: transaction.transactionId,
                status: OrderStatus.PAID
            }   
        } catch (error) {
            console.error(
                JSON.stringify(error, null, 2)
            );
            
            return {
                transactionId: '',
                status: OrderStatus.CANCELLED
            }
        }


    } 
    private async createCustomer(customer: Customer): Promise<string> {
        const customerRes = await this.api.request<RequestCustomer>('GET',`/customers?email=${customer.email}`)

        if(customerRes.data?.length > 0) return customerRes.data[0].id
        
        const customerParams:CreateCustomer = {
            name: customer.fullName,
            email: customer.email,
            mobilePhone: customer.mobile,
            cpfCnpj: customer.document,
            postalCode: customer.zipCode,
            address: customer.street,
            addressNumber: customer.number,
            complement: customer.complement,
            province: customer.neighborhood,
            notificationDisabled: true, 
        }

        const res = await this.api.request<CustomerAsaasDTO, CreateCustomer>("POST","/customers", customerParams)

        return res.id
    }
    private async createTransaction( 
        customerId: string, 
        order: Order, 
        customer: Customer, 
        payment: PaymentDTO
    ): Promise<{ transactionId: string, gatewayStatus: string }> {
        const paymentParams = {
            customer: customerId,
            billingType: "CREDIT_CARD",
            dueDate: new Date().toISOString(),
            value: order.total,
            description: `Pedido #${order.id}`,
            externalReference: order.id.toString(),
            creditCard: {
              holderName: payment.creditCardHolder,
              number: payment.creditCardNumber,
              expiryMonth: payment.creditCardExpiration?.split("/")[0],
              expiryYear: payment.creditCardExpiration?.split("/")[1],
              ccv: payment.creditCardSecurityCode
            },
            creditCardHolderInfo: {
              name: customer.fullName,
              email: customer.email,
              cpfCnpj: customer.document,
              postalCode: customer.zipCode,
              addressNumber: customer.number,
              addressComplement: customer.complement,
              mobilePhone: customer.mobile
            },
          }
        const res = await this.api.request("POST","/payments", paymentParams)

        return {
            transactionId: res.id,
            gatewayStatus: res.status
        }
    }
}