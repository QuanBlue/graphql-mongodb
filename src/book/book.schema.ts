import { gql } from 'apollo-server'

export const bookSchema = gql`
    type book {
        id: ID!
        name: String
        genre: String
        authorID: ID
    }

`