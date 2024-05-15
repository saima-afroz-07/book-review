import Joi from "joi";

export const getReview = Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.string().required().hex().length(24),
    })
});

export const createReview = Joi.object().keys({
  body: Joi.object().keys({
    book_id: Joi.string().hex().length(24).required(),
    review_text: Joi.string().required(),
    rating: Joi.string().required().valid('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'),
  })
});

export const updateReview = Joi.object().keys({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  }),
  body: Joi.object().keys({
    review_text: Joi.string(),
    rating: Joi.string().valid('ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'),
  })
})

export const deleteReview = Joi.object().keys({
  params: Joi.object().keys({
    id: Joi.string().required().hex().length(24),
  })
})

