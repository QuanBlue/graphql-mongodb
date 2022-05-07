import { Schema, model } from "mongoose";

const authorSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: String }
    },
    { timestamps: true }

)

export const authorModel = model("authors", authorSchema);