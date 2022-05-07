require("dotenv").config({ path: __dirname + "../../.env" });

import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('[Info] connected to mongoDB')
    }
    catch {
        console.log("[Error] connection to mongoDB failed")
    }
}