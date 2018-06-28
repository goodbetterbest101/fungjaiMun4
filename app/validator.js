const { checkSchema } = require('express-validator/check')

exports.validatorMessage = checkSchema({
  message: {
    in: ['body'],
    errorMessage: 'Invalid message parameters',
    isString: true
  }
})

exports.validatorError = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.mapped() })
  }

  next()
}