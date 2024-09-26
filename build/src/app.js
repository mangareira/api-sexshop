"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./routes/router");
const error_middlaware_1 = require("./middlawares/error.middlaware");
class App {
    constructor() {
        this.routes = new router_1.Routes();
        this.app = (0, express_1.default)();
        this.middlawareInitializer();
        this.routesInitializer();
        this.intercepitionError();
    }
    routesInitializer() {
        this.app.use("/v1", this.routes.router);
    }
    intercepitionError() {
        this.app.use(error_middlaware_1.errorMiddleware);
    }
    middlawareInitializer() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    listen() {
        this.app.listen(process.env.PORT, () => console.log("Server is running"));
    }
}
exports.App = App;
