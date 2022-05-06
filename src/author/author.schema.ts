import { gql } from "apollo-server";

export const authorSchema = gql`
    type author {
        id: ID!
        name: String      
    }

    # ROOT TYPE 
    type Query {
        authors: [author]
    }
`

