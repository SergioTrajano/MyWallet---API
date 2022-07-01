import signInSchema from '../schemas/signInSchema';

async function validateSignIn(req, res, next) {
    const user = req.body;

    const { error } = signInSchema.validate(user);

    if (!error) {
        res.sendStatus(422);
        return;
    }

    next();
}