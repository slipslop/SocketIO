"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const RandomScreenNameGenerator_1 = __importDefault(require("./RandomScreenNameGenerator"));
const port = 3000;
class Server {
    constructor(port) {
        this.port = port;
        const app = express_1.default();
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        this.server = new http_1.default.Server(app);
        const io = new socket_io_1.default.Server(this.server);
        const r = new RandomScreenNameGenerator_1.default();
        io.on('connection', function (socket) {
            const name = r.getName();
            console.log('user connected: ' + name);
            socket.emit('message', `Hello ${name}`);
            socket.broadcast.emit('message', `Say hello to ${name}`);
            socket.on("disconnect", function () {
                console.log('user disconnected: ' + name);
            });
        });
    }
    start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
}
const server = new Server(port);
server.start();
//# sourceMappingURL=Server.js.map