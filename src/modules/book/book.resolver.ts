import * as authorService from "../author/author.service";
import * as bookService from "./book.service";

export const bookResolver = {
    Query: {
        getAllBooks: async (root, args, context) => {
            const books: Book = await bookService.getAllBooks();

            return books
        },

        getBookById: async (root, args, context) => {
            const id = args.id;
            console.log("[Info] Get book by ID <", id, ">");

            const book: Book = await bookService.getBookById(id);
            return book
        }
    },

    Mutation: {
        createBook: async (root, args, context) => {
            console.log("[Info] Create a book")
            await bookService.createBook(args);
        },

        updateBook: async (root, args, conntext) => {
            console.log("[Info] Update book");
            await bookService.updateBook(args);
        },

        deleteBook: async (root, args, conntext) => {
            console.log("[Info] Delete book");
            await bookService.deleteBook(args.id)
        }
    },

    Book: {
        author: async (root, args, context) => {
            //find author by author id
            const authorId: String = root.authorId
            const author: Author = await authorService.getAuthorById(authorId);

            return author;
        }
    }

}