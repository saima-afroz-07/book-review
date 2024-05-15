import { ICreated, IModified, NullableString, ObjectId } from "../common_interface"

export type IBookReview = { 
    rating: NullableString,
    review_text: NullableString,
    created: ICreated,
    modified?: IModified,
    book_id: ObjectId,
    book_name: NullableString,
    book_author: NullableString
}