import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
             trim:true
    },
    video: {
        type: String,
        required: true,
    },
    poster: {
        public_id: String,
        url: String,
    },
    type: {
        type: [String],
        required: true,
        index: true,
        trim:true
    },
    featured: {
        type: Boolean,
        default: false
    }

})

export const portfolioModel = mongoose.model("Creations", portfolioSchema, "Creations");
