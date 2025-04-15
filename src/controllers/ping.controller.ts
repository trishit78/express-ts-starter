import { Request,Response } from "express";


export function pingHandle(req:Request,res:Response){
    console.log('hello ping pong')
    console.log("this is body: ", req.body);
    console.log("this is query: ", req.query);
    console.log("this is params: ", req.params);
    res.send('pong');

}