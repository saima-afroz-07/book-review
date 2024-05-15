import { NextFunction, Request, Response } from 'express';
import BookService from '../services/book';
import mongoose, { ObjectId } from 'mongoose';

class BookController {

    static async getAllBooks(request: Request, response: Response, next: NextFunction){
        try {
            const getBooks = await BookService.getAllBooks();
            return response.status(200).send(getBooks);
        } catch(error) {
            return next(error);
        }
    }

    static async getBook(request: Request, response: Response, next: NextFunction){
        try {
            const bookId = request.params.id as unknown as ObjectId;
            const getBook = await BookService.getBook(bookId);
            return response.status(200).send(getBook);
        } catch (error) {
            return next(error);
        }
    }

    static async createBook(request: Request, response: Response, next: NextFunction){
        try {
            const requestBody = request.body;
            const createBook = await BookService.createBook(requestBody);
            return response.status(201).send(createBook);
        } catch(error) {
            return next(error);
        }
    }

    static async deleteBook(request: Request, response: Response, next: NextFunction){
        try {
            const bookId = request.params.id as unknown as ObjectId;
            const deleteBook = await BookService.deleteBook(bookId);
            return response.status(201).send(deleteBook);
        } catch(error) {
            return next(error);
        }
    }
}

export default BookController