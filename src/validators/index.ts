import { NextFunction, Response } from "express";
import { AnyZodObject} from "zod";



/**
 * 
 * @param schema zod schema to validate the request body
 * @returns - middleware function to validate the request body
 */
export const zodValidator = (schema:AnyZodObject) =>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            await schema.parseAsync(req.body);
            console.log("the request is validated");
            next();
        } catch (error) {
            //if the zod validation fails
            
            return res.status(400).json({
                message:"Invalid request body",
                success:false,
                error:error
            })
        }
    }
}