import  express  from "express";
import pingRouter from "../ping.router";


const v2Router = express.Router();


// for routing we are using app.use
v2Router.use('/',pingRouter)

export default v2Router;