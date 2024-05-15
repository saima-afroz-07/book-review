import { IBookReview } from '../../interface/review/review';
import { Document, model, Schema, Types } from "mongoose";
import { createdSchema, modifiedSchema } from '../common_schema';

const ObjectId = Types.ObjectId;

export type IBookReviewModel = {} & IBookReview & Document;

const bookReviewSchema = new Schema({
    rating: {type: String, required: true, enum: ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE']},
    review_text: {type: String, required: true},
    book_id: {type: ObjectId, required: true},
    book_name: {type: String, required: true},
    book_author: {type: String, required: true},
    created: {type: createdSchema, required: true},
    modified: {type: modifiedSchema}
});

const BookReview = model<IBookReviewModel>('BookReview', bookReviewSchema);

export default BookReview;