import { Request,Response } from "express";


export function pingHandle(req:Request,res:Response){
    console.log('hello ping pong')
    res.send('pong');

}