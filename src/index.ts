require("dotenv").config({ path: __dirname + '..\\..\\.env' });

import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server'

import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"

import { authorSchema } from './author/author.schema'
import { authorResolver } from './author/author.resolver'

import { bookSchema } from './book/book.schema'
import { bookResolver } from './book/book.resolver'

const main = async () => {
    // connect to mongoDB
    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI)

            console.log('connected to mongoDB')
        }
        catch (err) {
            console.log(err)
        }
    }

    await connectDB()

    const typeDefs = mergeTypeDefs([authorSchema, bookSchema]);
    console.log("typedef:" + typeDefs);

    const resolvers = mergeResolvers([authorResolver, bookResolver]);
    console.log("resolvers:" + resolvers);

    const server = new ApolloServer({
        resolvers,
        typeDefs,
    })

    let url: string = "http://localhost:4000";

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    })
}

main()