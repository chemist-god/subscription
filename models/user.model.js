import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'User Name is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [3, 'User Name must be at least 3 characters long'],
        maxLength: [50, 'User Name must be at most 50 characters long']
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'User Email is invalid'],
        maxLength: [20, 'User Email must be at most 20 characters long'],
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: [6, 'User Password must be at least 6 characters long'],
        maxLength: [20, 'User Password must be at most 20 characters long'],
    },
});
