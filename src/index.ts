require("dotenv").config({ path: __dirname + '..\\..\\.env' });

import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer, gql } from 'apollo-server'
import { buildSchema } from 'graphql';
// import { peopleSchema } from './people/people.schema'
import { peopleResolver } from './people/people.resolver'

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

    connectDB()

    // const resolvers = [peopleResolver] as const;
    const { typeDefs, resolvers } = buildTypeDefsAndResolvers({
        resolvers: [peopleResolver],
        typeDefs: [peopleSchema],
    });

    const server = new ApolloServer({
        resolvers,
        typeDefs,
    })

    let url: string = "http://localhost:4000";

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    })

}

