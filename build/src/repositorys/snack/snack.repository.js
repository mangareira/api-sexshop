"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackRepository = void 0;
const prisma_1 = require("../../lib/prisma");
class SnackRepository {
    async findByName(snack) {
        const result = await prisma_1.prisma.snack.findMany({
            where: {
                name_icon: {
                    equals: snack
                }
            }
        });
        return result;
    }
    async getSnackCart(cart) {
        const result = await prisma_1.prisma.snack.findMany({
            where: {
                id: {
                    in: cart.map((snack) => snack.id)
                }
            }
        });
        return result;
    }
}
exports.SnackRepository = SnackRepository;
