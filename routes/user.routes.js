import { Router } from 'express';
import { getUsers, getUser } from '../controllers/user.controller';
import authorize from '../middleware/auth.middleware'


const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send({ title: 'CREATE User' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE User' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE User' }));

export default userRouter;