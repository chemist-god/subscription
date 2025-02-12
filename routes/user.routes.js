import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ title: 'GET all Users' }));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET User by ID' }));

userRouter.post('/', (req, res) => res.send({ title: 'CREATE User' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE User' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE User' }));

export default userRouter;