import joi from 'joi';

const transactionBodySchema = joi.object({
    value: joi.number().greater(0).required(),
    description: joi.string().required(),
    isPositive: joi.boolean().required(),
    date: joi.date().required()
});

export default transactionBodySchema;