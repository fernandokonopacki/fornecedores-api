import { CustomError } from "../model/customError.model";
import { NextFunction, Request, Response } from "express";

function handleError(
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
){
    let customError = err;

    if(!(err instanceof CustomError)){
        customError = new CustomError('teste');
    }

    res.status((customError as CustomError).status).send(customError);
};

export default handleError;