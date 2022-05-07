import { bookModel } from "./book.model";

export async function getAllBooks() {
    try {
        const books = await bookModel.find().lean();

        return books;
    }
    catch (err) {
        console.log("[Error]", err);
    }
}