import * as Joi from "joi";

import { validateAsync } from "./joi.config";
import { iIncidents } from "../Interfaces/iIncidents";


export const validateIncidents = async (body: iIncidents): Promise<iIncidents> => {

    const schema: Joi.ObjectSchema = Joi.object().options({ abortEarly: false, stripUnknown: { objects: true, arrays: false } })
        .keys({
            title: Joi.string().required().min(6).error(() => "The field title is required and it must be not null"),
            description: Joi.string().required().required().min(32).error(() => "The field description is required. It must be a min of 32 characters"),
            value: Joi.number().precision(10).required().error(() => "The field value is required. It only accepts float values"),
            ongId: Joi.string().guid().required().error(() => "The field ongId is required. It must be a valid ong identificator")
        });

    return await validateAsync(schema, body);
}