import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

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