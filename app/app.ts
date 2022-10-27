import express, {Application, Response, Request} from "express"
import * as bodyParser from "body-parser"
import * as httpContext from "express-http-context"
import * as path from "path"
import cors from 'cors'
import methodOverride = require("method-override")
import {useExpressServer} from "routing-controllers"
import errorHandler = require("errorhandler")
import {AppDataSource} from './db/data-source';


AppDataSource.initialize();

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    public config(){
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.get('/health', (req, res) => {
            console.log("[Server]: Health Check Request");
            res.status(200).json({
                message: "Server Up!"
            })
        })

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cors());
        this.app.use(methodOverride());
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction){
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }

    public routes(){
        let router: express.Router;
        router = express.Router();

        this.app.use((req, res, next) => {
            httpContext.ns.run(() => {
                next();
            })
        });

        this.app.use(`/`, router);
        useExpressServer(this.app, {
            controllers: [__dirname + "/controllers/**/*.js"]
        })
    }
}

export default new App().app;