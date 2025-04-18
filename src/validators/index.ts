import { NextFunction, Response,Request } from "express";
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
            
            res.status(400).json({
                message:"Invalid request body",
                success:false,
                error:error
            })
        }
    }
}


export const validateQueryParams = (schema:AnyZodObject) =>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        try {
            await schema.parseAsync(req.query);
            console.log("the request is validated");
            next();
        } catch (error) {
            //if the zod validation fails
            
            res.status(400).json({
                message:"Invalid request query params",
                success:false,
                error:error
            })
        }
    }
}



export const validateRequestBody = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            console.log("Validating request body");
            await schema.parseAsync(req.body);
            console.log("Request body is valid");
            next();

        } catch (error) {
            // If the validation fails, 
            console.log("Request body is invalid");
            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            });
            
        }
    }
}

