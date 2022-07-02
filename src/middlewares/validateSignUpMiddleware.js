import signUpSchema from '../schemas/signUpSchema.js';

export async function validateSignUn (res, req, next) {
    const user = req.body;

    const { error } = signUpSchema.validate(user);

    if (error) {
        res.sendStatus(422);
        return;
    }
    
    next();
}