import * as http from 'http';

import App from './app';

export class Server {

    private static serverInstance: Server;
    private server: http.Server;
    private port: number;

    public getServer(): http.Server {
        return this.server;
    }

    public runServer(): void {
        this.port = this.normalizePort(process.env.PORT || 3000);
        App.set('port', this.port);
        this.createServer();
    }

    private createServer(){
        this.server = http.createServer(App);
        this.server.listen(this.port);

        this.server.on('listening', () => {
            let address = this.server.address();
            let bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address?.port}`;
            console.log(bind);
        })

        this.server.on('error', (error: NodeJS.ErrnoException) => {
            if(error.syscall !== 'listen') throw error;
            console.error(error);
            process.exit(1);
        })
    }

    private normalizePort(val: number|string): number {
        let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
        return port;
    }
}