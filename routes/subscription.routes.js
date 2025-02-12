import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all Subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET Subscription by ID' }));
subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE Subscription' }));
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE Subscription' }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE Subscription' }));
subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET all user subscription' }));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL user subscription' }));
subscriptionRouter.put('/:id/renew', (req, res) => res.send({ title: 'RENEW user subscription' }));

export default subscriptionRouter;