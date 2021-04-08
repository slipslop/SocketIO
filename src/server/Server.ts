import express from "express";
import path from "path";
import http from "http";
import socketIO from "socket.io";
import RandomScreenNameGenerator from './RandomScreenNameGenerator';

const port: number = 3000

class Server {
    private server: http.Server
    private port: number

    constructor(port: number) {
        this.port = port

        const app = express();
        app.use(express.static(path.join(__dirname, '../client')));

        this.server = new http.Server(app);
        const io = new socketIO.Server(this.server)
        
        const r = new RandomScreenNameGenerator();
      
        io.on('connection', function(socket : socketIO.Socket) {

            const name = r.generateName();

            console.log('user connected: ' + name);

            socket.emit('message', `Hello ${name}`);

            socket.broadcast.emit('message', `Say hello to ${name}`);

            socket.on("disconnect", function() {
                console.log('user disconnected: ' + name);
            });

        });
    }

    public start() {
        this.server.listen(this.port, () => {
            console.log( `Server listening on port ${this.port}.` )
        })
    }

}

const server = new Server(port);
server.start();