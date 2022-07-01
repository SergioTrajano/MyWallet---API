import db from '../db';
import { compareSync } from 'bcrypt';
import { v4 as uuid } from 'uuid';

import signInSchema from '../schemas/signInSchema';

async function validateSignIn(req, res, next) {
    const user = req.body;

    const { error } = signInSchema.validate(user);

    if (!error) {
        res.sendStatus(422);
        return;
    }

    const userInCollection = await db.collection('users').findOne({email: user.email});

    if (userInCollection && compareSync(userInCollection.password, user.password)) {
        const token = uuid.v4();

        await db.collection('sessions').insertOne({
            userId: user._id,
            token
        });

    } else {
        res.sendStatus(404);
    }

    res.locals.token = token;
    next();
}