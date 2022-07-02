import joi from 'joi';

const tokenSchema = joi.object({
    Authorization: joi.string().pattern(/^Bearer/),
});

export default tokenSchema;