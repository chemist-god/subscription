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