require("dotenv").config({ path: __dirname + '..\\..\\.env' });

import express from 'express'
import * as database from './config/database.config';

import { ApolloServer } from 'apollo-server'

import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"

import { authorSchema } from './modules/author/author.schema'
import { authorResolver } from './modules/author/author.resolver'

import { bookSchema } from './modules/book/book.schema'
import { bookResolver } from './modules/book/book.resolver'

const main = async () => {
    // connect to mongoDB
    database.connect();

    const typeDefs = mergeTypeDefs([authorSchema, bookSchema]);
    const resolvers = mergeResolvers([authorResolver, bookResolver]);

    const server = new ApolloServer({
        resolvers,
        typeDefs,
    })

    let url: String = "http://localhost:4000";

    server.listen().then(({ url }) => {
        console.log(`[Info] Server ready at ${url}`)
    })
}

main()