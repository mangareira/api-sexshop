import { Snack } from "@prisma/client";
import { SnackDTO } from "../../lib/types/snackDTO";

export interface SnackRepositoryDTO {
    findByName(snack: string): Promise<Snack[]>  
    getSnackCart(cart: SnackDTO[]): Promise<Snack[]>
}