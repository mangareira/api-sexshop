import { HttpException } from "../lib/interfaces/httpException";
import { SnackRepository } from "../repositorys/snack/snack.repository";

export class SnackService {
    constructor(private snackRepository: SnackRepository) {}

    async findSnacks(snack: string) {
        if(snack == 'undefined') throw new HttpException(400, "Snack required")
        const result = await this.snackRepository.findByName(snack)
        return result
    }
}