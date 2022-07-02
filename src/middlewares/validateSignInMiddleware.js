import signInSchema from '../schemas/signInSchema.js';

export async function validateSignIn(req, res, next) {
    const user_email = req.headers.email;
    const user_password = req.headers.password;
    const user = {
        email: user_email,
        password: user_password
    }

    const { error } = signInSchema.validate(user);

    if (error) {
        res.sendStatus(422);
        return;
    }

    next();
}