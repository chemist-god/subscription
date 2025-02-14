import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Subscription Name is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [3, 'Subscription Name must be at least 3 characters long'],
        maxLength: [50, 'Subscription Name must be at most 50 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Subscription Price is required'],
        min: [0, 'Subscription Price must greater than 0'],
    },

    description: {
        type: String,
        required: [true, 'Subscription Description is required'],
        trim: true,
        lowercase: true,
        minLength: [3, 'Subscription Description must be at least 3 characters long'],  
        maxLength: [50, 'Subscription Description must be at most 50 characters long'],
    },
} , { timestamps: true });