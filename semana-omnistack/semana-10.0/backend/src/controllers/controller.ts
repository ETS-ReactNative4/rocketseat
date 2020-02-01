import { IDevDTO } from "../interfaces/IDevDTO";
import { IGithubUser } from "../interfaces/IGithubUser";
import { ILocationDTO } from "../interfaces/ILocationDTO";

import {
    Request,
    Response,
    NextFunction
} from "express";

export const createDeveloper = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<object> => {
    try {

        return {};
    } catch (err) {
        console.log(err);
        return response.status(400).json({message:[err.message || err.stack]});
    }
}

export const getAllDevelopers = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<object> => {
    try {
        
        return {};
    } catch (err) {
        console.log(err);
        return response.status(400).json({message:[err.message || err.stack]});
    }
}

export const getDevelopersPerLocation = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<object> => {
    try {
        
        return {};
    } catch (err) {
        console.log(err);
        return response.status(400).json({message:[err.message || err.stack]});
    }
}