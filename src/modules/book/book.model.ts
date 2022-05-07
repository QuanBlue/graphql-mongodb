import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    name: { type: String },
    genre: { type: String },
    authorID: { type: Schema.Types.ObjectId },
})

export const bookModel = model("books", bookSchema);

