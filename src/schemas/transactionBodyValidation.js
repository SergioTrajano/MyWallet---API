import joi from 'joi';

const transactionBodySchema = joi.object({
    value: joi.number().greater(0).required(),
    description: joi.string().required()
});

export default transactionBodySchema;