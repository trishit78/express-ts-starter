import { NextFunction, Request,Response } from "express"; 

import fs from "fs/promises";
import { NotFoundError } from "../utils/errors/app.error";

// export const pingHandler = (req:Request,res:Response,next:NextFunction)=>{
//     // console.log('hello ping pong')
//     // console.log("this is body: ", req.body);
//     // console.log("this is query: ", req.query);
//     // console.log("this is params: ", req.params);
//     // res.send('pong');

// try {
//     fs.readFile("sample",(err,data)=>{
//         if(err){
//             console.log("Error reading file",err);

//             next(err);  // pass the error to the next middleware which is default error handler

//            // throw new Error("something went wrong when we were read the file.")
        
//         }
//         console.log(data);
//     })
//     //throw new Error('This is a test error');   // express throws error like this
 
// } catch (error) {
//       console.log("inside catch");
//       res.status(500).json({
//         success:false
//       })
// }
   
//     // res.status(200).json({
//     //     message:'Pong',
//     //     success:true
//     // });
// }



export const pingHandler = async (req:Request,res:Response,next:NextFunction)=>{
    // if the fs throws error then it will go to app.use(genericErrorHandler) -> custom error handler
    try {
        await fs.readFile("sample");
        res.status(200).json({message:"Pong!"});
    } catch (error) {
        throw new NotFoundError("some file went wrong");
          // this error goes like -> app.error -> particular class -> AppError interface -> Error class -> app.use(genericError) -> error.middleware.ts -> response sent
    }

}