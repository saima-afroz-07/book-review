import { Schema } from "mongoose";

export const createdSchema: Schema = new Schema(
    {
      createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
        immutable: true,
      },
    },
    { _id: false }
  );
  
  export const modifiedSchema: Schema = new Schema(
    {
      modifiedAt: { type: Date, required: true }
    },
    { _id: false }
  );