const PostController = require('../controller/postController')
const { authentication, authorizationAdmin } = require('../midleware/auth')
const multer = require('multer')
const imageKit = require('../midleware/imageKit')
const storage = multer.memoryStorage()
const upload = multer({storage:storage})
const router = require('express').Router()


router.get('/user', PostController.getAll)
router.get('/user/details/:id', PostController.getOne)
router.get('/user/category/:id', PostController.getByCategory)
router.use(authentication)
router.get('/', authorizationAdmin, PostController.getAll)
router.get('/details/:id', authorizationAdmin, PostController.getOne)
router.patch('/:id', authorizationAdmin, PostController.update)
router.post('/', authorizationAdmin, PostController.create)
router.delete('/:id', authorizationAdmin, PostController.destroy)

module.exports = router