"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackService = void 0;
const httpException_1 = require("../lib/interfaces/httpException");
class SnackService {
    constructor(snackRepository) {
        this.snackRepository = snackRepository;
    }
    async findSnacks(snack) {
        if (snack == 'undefined')
            throw new httpException_1.HttpException(400, "Snack required");
        const result = await this.snackRepository.findByName(snack);
        return result;
    }
}
exports.SnackService = SnackService;
