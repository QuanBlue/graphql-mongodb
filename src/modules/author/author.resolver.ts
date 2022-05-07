import * as authorService from './author.service';


export const authorResolver = {
    Query: {
        getAllAuthors: (root, args, context) => {
            console.log("[Info] get all authors");

            const authors = authorService.getAllAuthors();
            return authors
        },

        getAuthorByID: (root, args, context) => {
            const id: String = args.id;
            console.log("[Info] Get author by ID <", id, ">");

            const author = authorService.getAuthorById(id);
            return author;

        }
    },

    Mutation: {
        createAuthor: (root, args, context) => {
            console.log("[Info] Create author");
            authorService.createAuthor(args);
        },

        updateAuthor: (root, args, context) => {
            console.log("[Info] Update author");
            authorService.updateAuthor(args);
        },

        deleteAuthor: (root, args, context) => {
            console.log("[Info} Delete Author");
            authorService.deleteAuthor(args.id);
        }
    }
}

