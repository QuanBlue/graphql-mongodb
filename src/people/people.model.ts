import { Schema, model } from "mongoose";

const peopleSchema = new Schema(
    {
        name: String,
        email: String,
        phone: String,
    },
    { timestamps: true }

)

module.exports = model("people", peopleSchema);