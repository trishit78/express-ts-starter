import  express, {  Request, Response }  from "express"; 

//import { Request,Response,NextFunction } from "express";
import { pingHandler } from "../controllers/ping.controller";
  import { validateRequestBody } from "../validators";
 import { pingSchema } from "../validators/ping.validator";

const pingRouter = express.Router();

/**
 * function middleware1(req:Request,res:Response,next:NextFunction){
    console.log("middleware1");
    next();
}

function middleware2(req:Request,res:Response,next:NextFunction){
    console.log('middleware2');
    next();
} 
 */

//pingRouter.get("/ping",middleware1,middleware2,pingHandle);


// we are using controller , so router.get -> controller func.
// pingRouter.get('/:userid/something',pingHandle);

/**
 * function checkHandler(req:Request,res:Response,next:NextFunction) :void{
    if(typeof req.body.name  !== 'string'){
        res.status(400).send("Bad Req");
    }
    next();
}
 * 
 */



pingRouter.post('/',validateRequestBody(pingSchema),pingHandler);


// pingRouter.get('/',pingHandler);

pingRouter.post('/handle',(req:Request,res:Response)=>{
    res.send('helping')
})


export default pingRouter;