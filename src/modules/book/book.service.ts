import { bookModel } from "./book.model";

export async function getAllBooks() {
    try {
        const books: Book = await bookModel.find().lean();

        return books;
    }
    catch (err) {
        console.log("[Error]", err);
    }
}

export async function getBookById(id: String) {
    try {
        const book: Book = await bookModel.findById(id).lean();
        console.log("book:", book);

        return book
    }
    catch (err) {
        console.log("[Error]", err);
    }
}

export async function createBook(book) {
    try {
        await bookModel.create({
            name: book.name,
            genre: book.genre,
            authorId: book.authorId
        });

    } catch (err) {
        console.log("[Error]", err);

    }
}

export async function updateBook(book) {
    try {
        await bookModel.findByIdAndUpdate(
            { _id: book.id },
            {
                name: book.name,
                genre: book.genre,
                authorId: book.authorId
            }
        )
    } catch (err) {
        console.log("[Error]", err);

    }
}

export async function deleteBook(id: String) {
    try {
        await bookModel.findByIdAndDelete(id);

    } catch (err) {
        console.log("[Error]", err);

    }

}