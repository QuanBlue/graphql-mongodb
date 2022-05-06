import { gql } from "apollo-server";

const peopleSchema = gql`
    type People {
        id: ID!
        name: String
        email: String
        phone: String
        createdAt: String
        updatedAt: String
    }

    # ROOT TYPE 
    type Query {
        peoples: [People]
    }
`


module.exports = peopleSchema