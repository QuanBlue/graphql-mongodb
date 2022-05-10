import * as authorService from './author.service';


export const authorResolver = {
    Query: {
        getAllAuthors: (root, args, context) => {
            console.log("[Info] get all authors");

            const authors = authorService.getAllAuthors();
            return authors
        },

        getAuthorById: async (root, args, context) => {
            const id: String = args.id;
            console.log("[Info] Get author by ID <", id, ">");

            const author: Author = await authorService.getAuthorById(id);
            return author;

        }
    },

    Mutation: {
        createAuthor: async (root, args, context) => {
            console.log("[Info] Create author");
            await authorService.createAuthor(args);
        },

        updateAuthor: async (root, args, context) => {
            console.log("[Info] Update author");
            await authorService.updateAuthor(args);
        },

        deleteAuthor: async (root, args, context) => {
            console.log("[Info} Delete Author");
            await authorService.deleteAuthor(args.id);
        }
    }
}

