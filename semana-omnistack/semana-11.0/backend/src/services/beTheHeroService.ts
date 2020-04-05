import { iIncidents } from '../Interfaces/iIncidents';
import { iOngs } from '../Interfaces/iOngs';
import OngDTO from "../models/OngDTO";
import IncidentsDTO from '../models/IncidentsDTO';
import Constants from '../utils/Constants';

export const insertOngs = async (ongData: iOngs): Promise<Object | undefined> => {
    try {
        const ongInfo: OngDTO = await OngDTO.create({
            name: ongData.name,
            email: ongData.email,
            city: ongData.city,
            uf: ongData.uf,
            whatsApp: ongData.whatsApp
        });

        const ongSaved = await ongInfo.save();

        return ongSaved;
    } catch (err) {
        console.log(err);
        throw new Error('Error while executing query on database');
    }
}

export const getOngs = async (): Promise<Object | undefined> => {
    try {
        return await OngDTO.findAll();
    } catch (err) {
        throw new Error('Error while executing query on database');
    }
}

export const insertIncident = async (incidentData: iIncidents): Promise<IncidentsDTO | undefined> => {
    try {
        const incidentInfo: IncidentsDTO = await IncidentsDTO.create({
            title: incidentData.title,
            description: incidentData.description,
            value: incidentData.value,
            ongId: incidentData.ongId
        });

        const incidentSaved = await incidentInfo.save();

        return incidentSaved;
    } catch (err) {
        console.log(err)
        throw new Error('Error while executing query on database');
    }
}

export const getAllIncidents = async (pagination: any): Promise<any | undefined> => {
    try {
        return await IncidentsDTO.findAndCountAll({
            limit: pagination.limit,
            offset: pagination.offSet,
            include: [OngDTO]
        });
    } catch (err) {
        throw new Error('Error while executing query on database');
    }
}

export const deleteIncident = async (id: number, ongId: string): Promise<any | undefined> => {
    try {
        const validation = await validateIncident(id, ongId);

        if (validation && validation.status === Constants.HTTP.STATUS.UNAUTHORIZED) {
            return validation;
        }

        await IncidentsDTO.destroy({
            where: { id, ongId }
        });

        return { message: 'Incident deleted.', ongId: validation.ongId };
    } catch (err) {
        throw new Error('Error while executing query on database');
    }
}

export const getIncidentByOng = async (ongId: string): Promise<Object | undefined> => {
    try {
        const result = await IncidentsDTO.findAll({
            where: {
                ongId
            }
        });

        return result;

    } catch (err) {
        throw new Error('Error while executing query on database');
    }
}

export const loginAuhorization = async (ongId: string): Promise<any | undefined> => {
    try {
        const result = await OngDTO.findOne({
            where: {
                id: ongId
            }
        });

        if (result) {
            return result;
        }

        return {
            message: `No ONG found with this ID: ${ongId}`
        };
    } catch (err) {
        throw new Error('Error while executing query on database');
    }
}

export const validateIncident = async (id: number, ongId: string): Promise<any> => {
    try {
        const incident = await IncidentsDTO.findOne({
            where: {
                id
            }
        });

        if (incident?.ongId !== ongId) {
            return { message: 'Unauthorized to delete this resource.', status: 401 }
        }

        return { ongId: incident.ongId };
    } catch (err) {
        throw new Error('Error while executing query on database');
    }
}