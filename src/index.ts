require("dotenv").config({ path: __dirname + '..\\..\\.env' });

import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { ApolloServer } from 'apollo-server';
import * as database from './config/database.config';
import { authorResolver } from './modules/author/author.resolver';
import { authorSchema } from './modules/author/author.schema';
import { bookResolver } from './modules/book/book.resolver';
import { bookSchema } from './modules/book/book.schema';


const main = async () => {
    // connect to mongoDB
    database.connect();

    const typeDefs = mergeTypeDefs([authorSchema, bookSchema]);
    const resolvers = mergeResolvers([authorResolver, bookResolver]);

    const server = new ApolloServer({
        resolvers,
        typeDefs,
    })

    server.listen({ port: process.env.PORT }).then(({ url }) => {
        console.log(`[Info] Server ready at ${url}`)
    })
}

main()