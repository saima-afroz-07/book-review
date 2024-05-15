import { requestValidator } from "../helpers/request_validator";
import { createBook, deleteBook, getBook } from "../validators/book/book";
import { INext, IRequest, IResponse } from "../vendor";

export const createtBookSchema = (req: IRequest, _res: IResponse, next: INext) => {
    const dataToValidate = {body: req.body}
    requestValidator(req, next, createBook, dataToValidate);
}

export const getBookSchema = (req: IRequest, _res: IResponse, next: INext) => {
    const dataToValidate = {params : req.params};
    requestValidator(req, next, deleteBook, dataToValidate);
}

export const deleteBookSchema = (req: IRequest, _res: IResponse, next: INext) => {
    const dataToValidate = {params : req.params};
    requestValidator(req, next, deleteBook, dataToValidate);
}