import tokenSchema from "../schemas/tokenHeadersSchema.js";
import db from '../db.js';

export async function validateTransactionHeader(req, res, next) {
    const header = { Authorization: req.headers.authorization };

    const { error } = tokenSchema.validate(header);

    if (error) {
        res.sendStatus(422);
        return;
    }

    const token = req.headers.authorization?.replace("Bearer ", "");

    const session = await db.collection('sessions').findOne({token});

    if (!session) {
        res.sendStatus(404);
        return;
    }

    res.locals.session = session;

    next();
}

