import { Schema, model } from "mongoose";

const authorSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
    },
    { timestamps: true }

)


module.exports = model("author", authorSchema);