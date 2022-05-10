import { Schema, model } from "mongoose";

const authorSchema = new Schema(
    {
        name: { type: String },
        age: { type: Number }
    },
    { timestamps: true }

)

export const authorModel = model("authors", authorSchema);