import User from "../models/user.model";

export const getUsers = async (req, res, next) => {
    try {
        const Users = await User.find();

        return res.status(200).json({
            success: true,
            data: Users
        });

    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const User = await User.findById(req.params.id).select('-password');

        if (!User) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        return res.status(200).json({
            success: true,
            data: User
        });

    } catch (error) {
        next(error);
    }
}