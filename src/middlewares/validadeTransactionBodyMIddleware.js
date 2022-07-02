import transactionBodySchema from '../schemas/transactionBodySchema.js';

export async function validateTransactionBody(req, res, next) {
    const newTransaction = req.body;

    const { error } = transactionBodySchema.validate(newTransaction);

    if (error) {
        res.sendStatus(422);
        return
    }

    next();
}