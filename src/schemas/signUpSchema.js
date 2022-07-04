import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email({ tlds: { allow: false}}),
    password: joi.string().required(),
});

export default signUpSchema;