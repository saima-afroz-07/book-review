import { INext, IRequest } from "../vendor";

export const requestValidator = (_req: IRequest, next: INext, schema: any, dataToValidate: any) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: false, // ignore unknown props
        stripUnknown: false, // remove unknown props
        errors: { label: 'key', wrap: { label: false } },
    };

    const { error, value } = schema.validate(dataToValidate, options, {
        errors: { label: 'key' },
    });
    if (error) {
        error.status = 422;
        return next(error);
    }

    dataToValidate = value;
    return next();
}