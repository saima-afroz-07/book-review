import { ICreated, IModified, NullableString, ObjectId } from "../common_interface"

export type UpdateBookReview = { 
    rating?: NullableString,
    review_text?: NullableString,
    modified: IModified
}