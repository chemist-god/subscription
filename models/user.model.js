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
});
