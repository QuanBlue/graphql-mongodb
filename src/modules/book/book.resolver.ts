import * as bookService from "./book.service"
import * as authorService from "../author/author.service"

export const bookResolver = {
    Query: {
        getAllBooks: (root, args, context) => {

            const books = bookService.getAllBooks();

            return books
        }
    },

    Book: {
        author: (root, args, context) => {
            //find author by author id
            const authorID: String = root.authorId;

            const author = authorService.getAuthorById(authorID);
            return author;
        }
    }

}