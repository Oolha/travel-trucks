import Joi from "joi";
export const campervanFormSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.empty": "Name is required",
        "string.min": "Name must be at least 3 characters",
        "string.max": "Name must be less than 30 characters",
    }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email format",
    }),
    date: Joi.date().required().messages({
        "date.base": "Booking date is required",
    }),
    comment: Joi.string().max(300).messages({
        "string.max": "Comment must be less than 300 characters",
    }),
});
