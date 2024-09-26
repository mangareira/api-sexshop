"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const client_1 = require("@prisma/client");
const api_1 = require("../lib/api");
class PaymentService {
    constructor() {
        this.api = new api_1.Api();
    }
    async process(order, customer, payment) {
        try {
            const customerId = await this.createCustomer(customer);
            const transaction = await this.createTransaction(customerId, order, customer, payment);
            if (transaction.success == true) {
                return {
                    transactionId: transaction.transactionId,
                    status: transaction.gatewayStatus,
                    qrCode: transaction.qrCode,
                    payload: transaction.payload,
                    expiration: transaction.expiration
                };
            }
            return {
                transactionId: transaction.transactionId,
                status: transaction.gatewayStatus,
            };
        }
        catch (error) {
            console.error(JSON.stringify(error, null, 2));
            return {
                transactionId: '',
                status: client_1.OrderStatus.CANCELLED
            };
        }
    }
    async createCustomer(customer) {
        const customerRes = await this.api.request('GET', `/customers?email=${customer.email}`);
        if (customerRes.data?.length > 0)
            return customerRes.data[0].id;
        const customerParams = {
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
        };
        const res = await this.api.request("POST", "/customers", customerParams);
        return res.id;
    }
    async createTransaction(customerId, order, customer, payment) {
        let paymentParams = {
            customer: customerId,
            billingType: customer.method,
            dueDate: new Date().toISOString(),
            value: order.total,
            description: `Pedido #${order.id}: ${order.OrderItem.map((order) => order.snack.name).join(", ")}. Entrega: ${customer.street}, ${customer.number}, ${customer.neighborhood}, ${customer.city}, ${customer.state}. Complemento: ${customer.complement} `,
            externalReference: order.id.toString(),
        };
        if (customer.method == client_1.MethodStatus.CREDIT_CARD) {
            paymentParams = {
                ...paymentParams,
                creditCard: {
                    holderName: payment.creditCardHolder,
                    number: payment.creditCardNumber,
                    expiryMonth: payment.creditCardExpiration?.split("/")[0],
                    expiryYear: payment.creditCardExpiration?.split("/")[1],
                    ccv: payment.creditCardSecurityCode,
                },
                creditCardHolderInfo: {
                    name: customer.fullName,
                    email: customer.email,
                    cpfCnpj: customer.document,
                    postalCode: customer.zipCode,
                    addressNumber: customer.number,
                    addressComplement: customer.complement,
                    mobilePhone: customer.mobile,
                },
            };
        }
        const res = await this.api.request("POST", "/payments", paymentParams);
        if (customer.method == client_1.MethodStatus.PIX) {
            const qrCode = await this.api.request("GET", `/payments/${res.id}/pixQrCode`);
            return {
                transactionId: res.id,
                gatewayStatus: res.status,
                qrCode: qrCode.encodedImage,
                payload: qrCode.payload,
                expiration: qrCode.expirationDate,
                success: qrCode.success
            };
        }
        return {
            transactionId: res.id,
            gatewayStatus: res.status
        };
    }
}
exports.PaymentService = PaymentService;
