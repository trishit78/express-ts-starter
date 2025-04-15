import  express, { NextFunction, Request, Response }  from "express"; 

//import { Request,Response,NextFunction } from "express";
import { pingHandle } from "../controllers/ping.controller";

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


function checkHandler(req:Request,res:Response,next:NextFunction) :void{
    if(typeof req.body.name  !== 'string'){
        res.status(400).send("Bad Req");
    }
    next();
}

pingRouter.get('/',checkHandler,pingHandle);

pingRouter.post('/handle',(req,res)=>{
    res.send('helpping')
})


export default pingRouter;