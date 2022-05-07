import { gql } from "apollo-server";

declare global {
    type Author = {
        _id: String
        name: String
        email: String
        phone: String
    }
}

export const authorSchema = gql`
    type Author {
        _id: ID!
        name:  String      
        email:  String
        phone:  String
    }

    # ROOT TYPE 
    type Query {
        getAllAuthors: [Author]
        getAuthorByID(id: ID!): Author
    }

    type Mutation {
        createAuthor(name:  String, email:  String, phone:  String): Author
        updateAuthor(id: ID!, name:  String, email:  String, phone:  String): Author
        deleteAuthor(id: ID!): Author
    }
`

