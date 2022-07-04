import signUpSchema from '../schemas/signUpSchema.js';
import db from '../db.js';

export async function validateSignUp (req, res, next) {
    const user = req.body;

    const { error } = signUpSchema.validate(user);

    if (error) {
        res.sendStatus(422);
        return;
    }

    const emailInUser = await db.collection('users').findOne({email: user.email});

    if (emailInUser) {
        res.sendStatus(403);
        return;
    }
    
    next();
}