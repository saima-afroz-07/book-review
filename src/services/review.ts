import createHttpError from 'http-errors';
import Logger from '../providers/logger';
import { IBookReview } from '../interface/review/review';
import BookReview from '../model/review/review';
import { ObjectId } from 'mongoose';
import { UpdateBookReview } from '../interface/types/update_review';
import Book from '../model/book/book';

class BookReviewService {

    // get all reviews
    static async getAllReviews() {
        try {
            const getAllReviews = await BookReview.find();

            return {
                success: true,
                status: "OK",
                data: getAllReviews
            }
        } catch(error: any){
            Logger.error(error.message);
            throw error;
        }
    }

    //get a review
    static async getReview(review_id: ObjectId) {
        try {
            const getReview = await BookReview.findOne({_id: review_id});
            if(!getReview){
                throw new createHttpError.NotFound('No review found')
            }
            return {
                success: true,
                status: "OK",
                data: getReview
            }
        } catch(error: any){
            Logger.error(error.message);
            throw error;
        }
    }

    //create a review
    static async createReview(input: IBookReview) {
        try {
            const getBook = await Book.findOne({_id: input.book_id});
            if(!getBook){
                throw new createHttpError.NotFound('Book with given book id not found!')
            }

            const {rating, review_text, book_id} = input;
            const reviewDetails: IBookReview = {
                rating,
                review_text,
                book_id,
                book_name: getBook.title,
                book_author: getBook.author,
                created: {}
            }
            const createReview = await BookReview.create(reviewDetails);

            return {
                success: true,
                message: 'OK',
                data: createReview,
            };

        } catch(error: any){
            Logger.error(error.message);
            throw error;
        }
    }

    //update a review
    static async updateReview(input: UpdateBookReview ,review_id: ObjectId) {
        try {
            const getReview = await BookReview.findOne({_id: review_id});
            if(!getReview){
                throw new createHttpError.NotFound('Review with given id not found!');
            }

            const modify = {
                modifiedAt : new Date(),
              };
        
              const updateBookReview = await BookReview.findByIdAndUpdate(
                {_id: review_id},
                {$set: {...input, modified : modify}},
                {new: true}
              );

            return {
                success: true,
                message: 'OK',
                data: {}
            };

        } catch(error: any){
            Logger.error(error.message);
            throw error;
        }
    }

    //delte a review
    static async deleteReview(review_id: ObjectId) {
        try {
            const deleteReview = await BookReview.findByIdAndDelete({_id: review_id});
            if(!deleteReview){
                throw new createHttpError.NotFound('Review with given id not found!');
            }

            return {
                success: true,
                message: 'OK',
                data: {}
            };

        } catch(error: any){
            Logger.error(error.message);
            throw error;
        }
    }

}

export default BookReviewService


