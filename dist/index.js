"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: __dirname + '..\\..\\.env' });
const mongoose_1 = __importDefault(require("mongoose"));
const apollo_server_1 = require("apollo-server");
// import { peopleSchema } from './people/people.schema'
const people_resolver_1 = require("./people/people.resolver");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // connect to mongoDB
    const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGO_URI);
            console.log('connected to mongoDB');
        }
        catch (err) {
            console.log(err);
        }
    });
    connectDB();
    // const resolvers = [peopleResolver] as const;
    const { typeDefs, resolvers } = buildTypeDefsAndResolvers({
        resolvers: [people_resolver_1.peopleResolver],
        typeDefs: [peopleSchema],
    });
    const server = new apollo_server_1.ApolloServer({
        resolvers,
        typeDefs,
    });
    let url = "http://localhost:4000";
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
});
