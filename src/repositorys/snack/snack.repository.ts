import { Snack } from "@prisma/client";
import { SnackRepositoryDTO } from "./snack";
import { prisma } from "../../lib/prisma";
import { SnackDTO } from "../../lib/types/snackDTO";

export class SnackRepository implements SnackRepositoryDTO  {
    async findByName(snack: string): Promise<Snack[]> {
        const result = await prisma.snack.findMany({
            where: {
                snack: {
                    equals: snack
                }
            }
        })
        return result
    }
    async getSnackCart(cart: SnackDTO[]): Promise<Snack[]> {
        const result = await prisma.snack.findMany({
            where: {
                id: {
                    in: cart.map((snack) => snack.id)
                }
            }
        })

        return result
    }
    
}   