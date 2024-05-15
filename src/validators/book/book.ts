import Joi from "joi";

export const createBook = Joi.object().keys({
    body: Joi.object().keys({
        title: Joi.string().required(),
        author: Joi.string().required(),
        genre: Joi.string().required(),
        description: Joi.string().required(),
    })
});

export const getBook = Joi.object().keys({
    params: Joi.object().keys({
        id: Joi.string().required().hex().length(24),
    })
})

export const deleteBook = Joi.object().keys({
    params: Joi.object().keys({
        id: Joi.string().required().hex().length(24),
    })
})