import db from '../db';
import { compareSync } from 'bcrypt';
import { v4 as uuid } from 'uuid';

async function signIn(req, res) {
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