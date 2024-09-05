import { Customer } from "@prisma/client";
import { CustomerDTO } from "../../lib/types/customerDTO";
import { CustomerRespositoryDTO } from "./customer";
import { prisma } from "../../lib/prisma";

export class CustomerRespository implements CustomerRespositoryDTO{
    async createIfNotExists(customer: CustomerDTO): Promise<Customer> {
        const result = await prisma.customer.upsert({
            where: {
                email: customer.email
            },
            create: customer,
            update: customer
        })
        return result
    }
}