import express from 'express';
import cors from 'cors';

import landingController from './controllers/landing.controller';

class Server {

    public app: express.Application;
    public port: any;
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.config();
       
    }

    config() {
        this.app.set('port', this.port);

        //middlewares       
        this.app.use(express.json());       
        this.app.use(cors());
        this.routes();
    }

    routes() {
        this.app.use('/api/landing', landingController);

    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server on port: ',this.app.get('port') );
        });
    }
}

const server = new Server();
server.start();