import { ICreated, NullableString } from "../common_interface"

export type IBook = {
    title: NullableString,
    author: NullableString,
    genre: NullableString,
    description: NullableString,
    created: ICreated
}