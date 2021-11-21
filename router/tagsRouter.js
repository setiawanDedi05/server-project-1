const TagsController = require('../controller/tagsController')

const router = require('express').Router()

router.get('/', TagsController.getAll)
router.get('/:id', TagsController.getOne)
router.post('/', TagsController.create)

module.exports = router