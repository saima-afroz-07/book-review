import { IBook } from '../../interface/book/book';
import { Document, model, Schema } from "mongoose";
import { createdSchema } from '../common_schema';

export type IBookModel = {} & IBook & Document;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    description: {type: String, required: true},
    created: {type: createdSchema, required: true}
});

const Book = model<IBookModel>('Book', bookSchema);

export default Book;