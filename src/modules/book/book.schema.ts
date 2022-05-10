import { gql } from 'apollo-server'

declare global {
    type Book = {
        _id: String
        name: String
        genre: String
        author: Author
    }
}

export const bookSchema = gql`
    type Book {
        _id: ID!
        name:  String
        genre:  String
        author: Author
    }

    type Query {
        getAllBooks: [Book]
        getBookById(id: ID!): Book
    }

    type Mutation {
        createBook(name:  String, genre:  String, authorId: ID!): Book
        updateBook(id: ID!, name:  String, genre:  String, authorId: ID): Book
        deleteBook(id: ID!): Book
    }
`