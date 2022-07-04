import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email({ tlds: { allow: false}}),
    password: joi.string().required().pattern(/{8, 16}/),
});

export default signUpSchema;