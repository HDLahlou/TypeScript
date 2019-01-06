import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import {Routes} from "./routes/crmRoutes";

//key: 4870200a7549626b210dcb15aeb9ec8a14994922

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost/CRMdb';

  constructor(){
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

  private config():void{
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/ x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended:false }));
  }
}

export default new App().app;
