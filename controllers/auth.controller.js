import mongoose from 'mongoose';


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