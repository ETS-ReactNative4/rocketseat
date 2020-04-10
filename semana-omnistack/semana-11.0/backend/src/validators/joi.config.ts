import * as Joi from "joi";

export const validateAsync = async (schema: Joi.ObjectSchema, body: any): Promise<any> => {
    try {
        const validation: any = await schema.validate(body);
        return validation;
    } catch (err) {
        throw err
    }
}