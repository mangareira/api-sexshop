import { Customer } from "@prisma/client";
import { CustomerDTO } from "../../lib/types/customerDTO";

export interface CustomerRespositoryDTO {
    createIfNotExists(customer: CustomerDTO): Promise<Customer> 
}