import { IDevDTO } from "../interfaces/IDevDTO";
import { IGithubUser } from "../interfaces/IGithubUser";
import { ILocationDTO } from "../interfaces/ILocationDTO";
import * as github from "../utils/githubRequests";
import * as service from "../services/devService";

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
        const {
            github_username,
            techs,
            longitude,
            latitude
        } = request.body;

        const userData = await github.getUserInfo(github_username);

        const technologies = techs.split(',').map((tech: string) => tech.trim());

        const devInformation: IDevDTO = {
            name: userData.name,
            github_username,
            bio: userData.bio,
            avatar_url: userData.avatar_url,
            techs: technologies
        }

        const devLocation: ILocationDTO = {
            longitude,
            latitude,
        }

        const devData = await service.insertDeveloper(devInformation, devLocation);

        return response.status(201).json(devData);
    } catch (err) {
        console.log(err);
        return response.status(400).json({ message: [err.message || err.stack] });
    }
}

export const getAllDevelopers = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<object> => {
    try {

        const developersData = await service.findAllDevelopers();

        return response.status(200).json(developersData.rows);
    } catch (err) {
        console.log(err);
        return response.status(400).json({ message: [err.message || err.stack] });
    }
}

export const getDevelopersPerLocation = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<object> => {
    try {

        const {
            longitude,
            latitude,
        } = request.query;

        const params: ILocationDTO = {
            longitude,
            latitude
        }

        const foundedDevelopers = await service.findDevelopersPerLocation(params);

        return response.status(200).json(foundedDevelopers.rows);
    } catch (err) {
        console.log(err);
        return response.status(400).json({ message: [err.message || err.stack] });
    }
}