"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRespository = void 0;
const prisma_1 = require("../../lib/prisma");
class CustomerRespository {
    async createIfNotExists(customer) {
        const result = await prisma_1.prisma.customer.upsert({
            where: {
                email: customer.email
            },
            create: customer,
            update: customer
        });
        return result;
    }
}
exports.CustomerRespository = CustomerRespository;
