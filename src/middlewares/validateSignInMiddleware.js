import signInSchema from '../schemas/signInSchema.js';

export async function validateSignIn(req, res, next) {
    const user = req.headers;

    const { error } = signInSchema.validate(user);

    if (!error) {
        res.sendStatus(422);
        return;
    }

    next();
}