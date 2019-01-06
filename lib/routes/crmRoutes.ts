import {Request, Response, NextFunction} from "express";
import {ContactController} from "../controller/crmController";



export class Routes{

  public contactController: ContactController = new ContactController();

  public routes(app): void{
    app.route('/')
    .get((req: Request, res: Response) =>{
      res.status(200).send({
        message: "Get request successful"
      })
    })

    //Contact
    app.route('/contact')
    //GET endpoint
    .get((req: Request, res: Response, next: NextFunction) => {
      // middleware
      if(req.query.key !== '4870200a7549626b210dcb15aeb9ec8a14994922'){
        res.status(401).send('You shall not pass!');
      } else {
        next();
      }
      },this.contactController.getContacts)
    //POST endpoint
    .post((req: Request, res: Response, next: NextFunction) => {
      // middleware
      if(req.query.key !== '4870200a7549626b210dcb15aeb9ec8a14994922'){
        res.status(401).send('You shall not pass!');
      } else {
        next();
      }
      },this.contactController.addNewContact)

    //Contact detail
    app.route('/contact/:contactId')
    //get specific content
    .get((req: Request, res: Response, next: NextFunction) => {
      // middleware
      if(req.query.key !== '4870200a7549626b210dcb15aeb9ec8a14994922'){
        res.status(401).send('You shall not pass!');
      } else {
        next();
      }
      },this.contactController.getContactWithID)
    .put((req: Request, res: Response, next: NextFunction) => {
      // middleware
      if(req.query.key !== '4870200a7549626b210dcb15aeb9ec8a14994922'){
        res.status(401).send('You shall not pass!');
      } else {
        next();
      }
      },this.contactController.updateContact)
    .delete((req: Request, res: Response, next: NextFunction) => {
      // middleware
      if(req.query.key !== '4870200a7549626b210dcb15aeb9ec8a14994922'){
        res.status(401).send('You shall not pass!');
      } else {
        next();
      }
    },this.contactController.deleteContact)
  }
}
