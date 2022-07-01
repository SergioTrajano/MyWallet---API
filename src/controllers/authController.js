import db from '../db.js';
import { compareSync, hashSync } from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signIn(req, res) {
    const user = req.body;

    const userInCollection = await db.collection('users').findOne({email: user.email});

    if (userInCollection && compareSync(userInCollection.password, user.password)) {
        const token = uuid.v4();

        await db.collection('sessions').insertOne({
            userId: user._id,
            token
        });

        res.status(200).send({token: token});
    } else {
        res.sendStatus(404);
    }
}

export async function singUp(req, res) {
    const user = req.body;

    const saltNumber = 15;
    const hashPassword = hashSync(user.password, saltNumber);

    try {
        await db.collection('users').insertOne({...user, password: hashPassword});

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}