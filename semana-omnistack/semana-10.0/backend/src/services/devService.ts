import DevDTO from "../models/DevDTO";
import LocationDTO from "../models/LocationDTO";
import { IDevDTO } from "../interfaces/IDevDTO";
import { ILocationDTO } from "../interfaces/ILocationDTO";

export const insertDeveloper = async (devInformation: IDevDTO, locationInformation: ILocationDTO): Promise<object> => {
    try {

        const locationData: LocationDTO = await LocationDTO.create({
            locationInformation
        });
        const devData: DevDTO = await DevDTO.create({
            name: devInformation.name,
            github_username: devInformation.github_username,
            bio: devInformation.bio,
            avatar_url: devInformation.avatar_url,
            techs: devInformation.techs,
            location: locationData,
        });

        if (devData) {
            return await devData.save();
        }

        const error = {
            error: 'Error at save Developer Information',
            developer: [
                devInformation
            ]

        }
        return error;
    } catch (err) {
        console.log(err);
        const error = {
            error: 'Error at insertDeveloper()',
            message: [
                err.message || err.stack,
            ],
        };

        return error;
    }
}

    export const findAllDevelopers = async (): Promise<any> => {
        try {
            const developers = await DevDTO.findAndCountAll({
                include: [LocationDTO],
            });

            return developers;
        } catch (err) {
            console.log(err);
            const error = {
                error: 'Error at findAllDevelopers',
                message: [
                    err.message || err.stack,
                ],

            };

            return error;
        }
    }

    export const findDevelopersPerLocation = async (locationInformation: ILocationDTO): Promise<any> => {
        try {
            const filters: any = locationInformation;

            delete filters.id;

            const foundDevelopers = await DevDTO.findAndCountAll({
                include: [LocationDTO],
                where: filters,
            });

            return foundDevelopers;
        } catch (err) {
            console.log(err);
            return [];
        }
    }