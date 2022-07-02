import db from '../db.js';
import { compareSync, hashSync } from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signIn(req, res) {
    const user = req.headers;

    const userInCollection = await db.collection('users').findOne({email: user.email});

    if (userInCollection && compareSync(user.password, userInCollection.password)) {
        const token = uuid();
        await db.collection('sessions').insertOne({
            userId: userInCollection._id,
            token
        });

        const resUser = {
            name: userInCollection.name,
            token
        };

        res.status(200).send(resUser);
    } else {
        res.sendStatus(404);
    }
}

export async function singUp(req, res) {
    const user = req.body;

    const hashPassword = hashSync(user.password, 15);

    try {
        await db.collection('users').insertOne({...user, password: hashPassword});

        const userId = await db.collection('users').findOne({email: user.email});

        const inicialUserTransactionHIstory = {
            id: userId._id,
            transactions: [],
        }

        await db.collection('transactionHistory').insertOne(inicialUserTransactionHIstory);

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}