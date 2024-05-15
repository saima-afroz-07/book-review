import { ObjectId } from "mongoose";
import { IBook } from "../interface/book/book";
import Book from "../model/book/book";
import Logger from "../providers/logger";
import BookReview from "../model/review/review";
import createHttpError from 'http-errors';

class BookService {
    static async getAllBooks(){
        try {
            const getAllBooks = await Book.find();

            return {
                success: true,
                status: "OK",
                data: getAllBooks
            }
        } catch (error: any) {
            Logger.error(error.message);
            throw error;
        }
    }
    static async getBook(id: ObjectId){
        try {
            const getBook = await Book.findOne({_id: id});
            return {
                success: true,
                status: "OK",
                data: getBook
            }
        } catch (error: any) {
            Logger.error(error.message);
            throw error;
        }
    }
    static async createBook(input: IBook){
        try {
           const {title, author, genre, description} = input;
           const bookDetails :IBook = {
            title,
            author,
            genre,
            description,
            created: {}
           }

           const createBook = await Book.create(bookDetails);

           return {
            success: true,
            message: 'OK',
            data: createBook
           }
        } catch (error: any) {
            Logger.error(error.message);
            throw error;
        }
    }

    static async deleteBook(bookId: ObjectId){

        try {
            // Delete the book
            const getAndDeleteBook =  await Book.findByIdAndDelete(bookId);
            if(!getAndDeleteBook){
                throw new createHttpError.NotFound('Book with given id not found!')
            }

            // Delete reviews related to the book
            await BookReview.deleteMany({ book_id: bookId });

            return {
                success: true,
                status: 'OK',
                data: {}
            }
        } catch (error: any) {
            Logger.error(error.message);
            throw error;
        }
    }
}

export default BookService