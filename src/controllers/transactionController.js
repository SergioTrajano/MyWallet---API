import db from '../db.js';
import { ObjectId } from 'mongodb';

export async function getTransactionHistory(req, res) {
    const sessionId = res.locals.session.userId;
    const userTransaction = await db.collection('transactionHistory').findOne({ id: new ObjectId(sessionId)});

    if (!userTransaction) {
        res.sendStatus(404);
        return;
    }

    res.send(userTransaction.transactions.reverse());
}

export async function postOnTransactionHistory(req, res) {
    const sessionId = res.locals.session.userId;
    const newTransaction = req.body;

    try {
        await db.collection('transactionHistory').updateOne(
            { id: new ObjectId(sessionId) },
            { $push: { transactions: newTransaction} }
        );

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}