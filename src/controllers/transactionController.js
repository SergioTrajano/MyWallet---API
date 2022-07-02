import db from '../db';
import { ObjectId } from 'mongodb';

export async function getTransactionHistory(req, res) {
    const sessionId = res.locals.session.userId;
    const userTransaction = await db.collection('transactionHistory').findOne({_id: new ObjectId(sessionId)});

    res.send(userTransaction.transactions);
}