import { Request, Response } from 'express';

import * as beTheHeroService from '../services/beTheHeroService';
import Constants from '../utils/Constants';
import { iIncidents } from '../Interfaces/iIncidents';
import { number } from 'joi';

export const createIncident = async (req: Request, res: Response): Promise<Object> => {
    try {
        let ongId = req.headers && req.headers.authorization ? req.headers.authorization : '';
        const body: iIncidents = {
            title: req.body.title,
            description: req.body.description,
            value: req.body.value,
            ongId: ongId
        }

        if (typeof ongId === "undefined") {
            return res.status(Constants.HTTP.STATUS.UNAUTHORIZED)
                .json({ message: 'Unauthorized to access this resource. Check the credentials' });
        }

        const incident = await beTheHeroService.insertIncident(body);

        return res.status(Constants.HTTP.STATUS.OK).json(incident);
    } catch (err) {
        return res.status(Constants.HTTP.STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
}

export const getAllIncidents = async (req: Request, res: Response): Promise<Object> => {
    try {
        const params = req.query;
        const pagination = {
            page: params && params.page > 0 ? params.page : Constants.PAGINATION.DEFAULT,
            limit: Constants.PAGINATION.LIMIT,
            offSet: Constants.PAGINATION.LIMIT
        }
        pagination.offSet = (pagination.page - 1) * pagination.limit;

        const incidents = await beTheHeroService.getAllIncidents(pagination);

        res.header('X-Total-Count', incidents.count);
        return res.status(Constants.HTTP.STATUS.OK).json(incidents.rows);
    } catch (err) {
        return res.status(Constants.HTTP.STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
}

export const deleteIncident = async (req: Request, res: Response): Promise<Object> => {
    try {
        const incidentId = req.params.incidentId;

        let ongId = req.headers && req.headers.authorization ? req.headers.authorization : undefined

        if (typeof ongId === "undefined") {
            return res.status(Constants.HTTP.STATUS.UNAUTHORIZED)
                .json({ message: 'Unauthorized to access this resource. Check the credentials' });
        }
        const result = await beTheHeroService.deleteIncident(Number(incidentId), ongId);

        if (result && result.status === Constants.HTTP.STATUS.UNAUTHORIZED) {
            return res.status(result.status).json(result);
        }

        return res.status(Constants.HTTP.STATUS.OK).json(result);
    } catch (err) {
        return res.status(Constants.HTTP.STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
}

export const getIncidentsByOng = async (req: Request, res: Response): Promise<Object> => {
    try {
        let ongId = req.headers && req.headers.authorization ? req.headers.authorization : undefined;
        const params = req.query;

        if (typeof ongId === "undefined") {
            return res.status(Constants.HTTP.STATUS.UNAUTHORIZED)
                .json({ message: 'Unauthorized to access this resource. Check the credentials' });
        }

        const pagination = {
            page: params && params.page > 0 ? params.page : Constants.PAGINATION.DEFAULT,
            limit: Constants.PAGINATION.LIMIT,
            offSet: Constants.PAGINATION.LIMIT
        }
        pagination.offSet = (pagination.page - 1) * pagination.limit;

        const incidentsByOng = await beTheHeroService.getIncidentByOng(ongId, pagination);

        return res.status(Constants.HTTP.STATUS.OK).json(incidentsByOng);
    } catch (err) {
        throw err;
    }
}