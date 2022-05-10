import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    name: { type: String },
    genre: { type: String },
    authorId: { type: Schema.Types.ObjectId },
})

export const bookModel = model("books", bookSchema);

