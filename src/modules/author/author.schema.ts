import { gql } from "apollo-server";

declare global {
    type Author = {
        _id: String
        name: String
        age: Number
    }
}

export const authorSchema = gql`
    type Author {
        _id: ID!
        name:  String
        age: Int      
    }

    # ROOT TYPE 
    type Query {
        getAllAuthors: [Author]
        getAuthorById(id: ID!): Author
    }

    type Mutation {
        createAuthor(name:  String, age: Int): Author
        updateAuthor(id: ID!, name:  String, age: Int): Author
        deleteAuthor(id: ID!): Author
    }
`

