import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import 'express-async-errors';

import HttpServer from "./HttpServer";

export default class ExpressAdapter implements HttpServer {
    readonly app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use('/api', (req, res) => {
            res.json({ message: 'hi' });
        });
    }

    listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running at port ${port}`);
        });
    }
}