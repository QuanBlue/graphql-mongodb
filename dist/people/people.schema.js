"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const peopleSchema = (0, apollo_server_1.gql) `
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
`;
module.exports = peopleSchema;
