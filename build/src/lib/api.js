"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Api {
    async request(method, url, body) {
        const response = await axios_1.default.request({
            baseURL: process.env.API_ASAAS_URL,
            headers: {
                access_token: process.env.TOKEN_ASAAS,
            },
            method,
            url,
            data: body
        });
        return response.data;
    }
}
exports.Api = Api;
