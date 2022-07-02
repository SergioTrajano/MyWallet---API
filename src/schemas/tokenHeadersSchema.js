import joi from 'joi';

const tokenSchema = joi.object({
    Authorization: joi.string().pattern(/^BEARER/),
});

export default tokenSchema;