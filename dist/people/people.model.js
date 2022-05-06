"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const peopleSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    phone: String,
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("people", peopleSchema);
