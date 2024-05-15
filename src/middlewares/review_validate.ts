import { requestValidator } from "../helpers/request_validator";
import { getReview, createReview, updateReview, deleteReview } from "../validators/review/review";
import { INext, IRequest, IResponse } from "../vendor";

export const getReviewSchema = (req: IRequest, _res: IResponse, next: INext) => {
    const dataToValidate = {params : req.params};
    requestValidator(req, next, getReview, dataToValidate);
}

export const createtReviewSchema = (req: IRequest, _res: IResponse, next: INext) => {
    const dataToValidate = {body: req.body}
    requestValidator(req, next, createReview, dataToValidate);
}

export const updateReviewSchema = (req: IRequest, _res: IResponse, next: INext) => {
    const dataToValidate = {body: req.body, params : req.params};
    requestValidator(req, next, updateReview, dataToValidate);
}

export const deleteReviewSchema = (req: IRequest, _res: IResponse, next: INext) => {
    const dataToValidate = {params : req.params};
    requestValidator(req, next, deleteReview, dataToValidate);
}