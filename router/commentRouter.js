const CommentController = require('../controller/commentController')
const { authentication } = require('../midleware/auth')

const router = require('express').Router()

router.get('/:id', CommentController.getAll)
router.post('/', authentication, CommentController.create)

module.exports = router