import tokenSchema from "../schemas/tokenHeadersSchema";

export async function validateTransactionHeader(req, res, next) {
    const header = req.headers;

    const { error } = tokenSchema.validate(header);

    if (!error) res.sendStatus(422);

    next();
}

