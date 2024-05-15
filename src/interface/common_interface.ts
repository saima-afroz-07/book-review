import { Types } from "mongoose"

export enum IBookRating {
    one,
    two,
    three,
    four,
    five
}

export type ICreated = {
    createdAt?: NullableDate;
    // createdBy: IEntity;
};

export type IModified = {
    modifiedAt?: NullableDate;
    // createdBy: IEntity;
};


export type NullableNumber = number | null | undefined;
export type NullableString = string | null | undefined;
export type NullableDate = Date | null | undefined;
export type ObjectId = Types.ObjectId | NullableString;




