import { NextFunction, Request, Response } from 'express';
import BookReviewService from '../services/review';
import { ObjectId } from 'mongoose';

class BookReviewController {

    static async getAllReviews(request: Request, response: Response, next: NextFunction){
        try {
            const getAllReviews = await BookReviewService.getAllReviews();
            return response.status(200).send(getAllReviews);
        } catch(error) {
            return next(error);
        }
    }

    static async getReview(request: Request, response: Response, next: NextFunction){
        try {
            const requestBody = request.params.id as unknown as ObjectId;
            const getReview = await BookReviewService.getReview(requestBody);
            return response.status(200).send(getReview);
        } catch(error) {
            console.log('error from ctrlr >>', error)
            return next(error);
        }
    }

    static async createReview(request: Request, response: Response, next: NextFunction){
        try {
            const requestBody = request.body;
            const createReview = await BookReviewService.createReview(requestBody);
            return response.status(201).send(createReview);
        } catch(error) {
            return next(error);
        }
    }

    static async updateReview(request: Request, response: Response, next: NextFunction){
        try {
            const requestBody = request.body;
            const reviewId = request.params.id as unknown as ObjectId;
            const updateReview = await BookReviewService.updateReview(requestBody, reviewId);
            return response.status(200).send(updateReview);
        } catch(error) {
            return next(error);
        }
    }

    static async deleteReview(request: Request, response: Response, next: NextFunction){
        try {
            const reviewId = request.params.id as unknown as ObjectId;
            const deleteReview = await BookReviewService.deleteReview(reviewId);
            return response.status(200).send(deleteReview);
        } catch(error) {
            return next(error);
        }
    }

}

export default BookReviewController