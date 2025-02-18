import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = req.body;

        //Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create user
        const newUser = await User.create([{ name, email, password: hashedPassword }], { session: session });

        const token = jwt.sign({ userId: newUser[0]._id }, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        await session.commitTransaction();
        session.endSession();
        return res.status(201).json({ 
            message: 'User created successfully',
            data: {
                user: {
                    _id: newUser[0]._id,
                    name: newUser[0].name,
                    email: newUser[0].email
                },
                token
            }
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const signIn = async (req, res) => {
    //Implement sign in logic here
}

export const signOut = async (req, res) => {
    //Implement signout logic here
}