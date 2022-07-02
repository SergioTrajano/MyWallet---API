import tokenSchema from "../schemas/tokenHeadersSchema.js";
import db from '../db.js';

export async function validateTransactionHeader(req, res, next) {
    const header = req.headers;

    const { error } = tokenSchema.validate(header);

    if (!error) {
        res.sendStatus(422);
        return;
    }

    const token = header.authorization?.replace("Bearer ", "");
    const session = await db.collection('sessions').findOne({token});

    if (!session) res.sendStatus(404);

    res.locals.session = session;

    next();
}

