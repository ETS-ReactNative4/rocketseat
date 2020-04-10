import * as Joi from "joi";

import { validateAsync } from "./joi.config";
import { iOngs } from "../Interfaces/iOngs";

export const validateOng = async (body: iOngs): Promise<iOngs> => {
    const schema: Joi.ObjectSchema = Joi.object().options({ abortEarly: false, stripUnknown: { objects: true, arrays: false } })
        .keys({
            name: Joi.string().required().error(() => "The field name is required and it must be not null"),
            email: Joi.string().email().required().error(() => "The field email required and. It must be a valid email"),
            whatsApp: Joi.string().regex(RegExp("[0-9]")).required().min(11).max(11).error(() => "The field whatsapp is required. It must be a length of 11 numbers"),
            city: Joi.string().required().error(() => "The field city is required and it must be not null"),
            uf: Joi.string().required().min(2).max(2).error(() => "The field uf is required. It oncly accepts 2 charcaters"),
        });

    return await validateAsync(schema, body)
}