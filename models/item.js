import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    notes: {
        type: String,
    },
    category: {
        type: String,
        require: true
    },
    tags: [
        String
    ], 
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model("Item", itemSchema)