const CategoryController = require('../controller/categoryController')
const {authentication, authorizationAdmin} = require('../midleware/auth')

const router = require('express').Router()


router.get('/user', CategoryController.getAll)
router.get('/user/:id', CategoryController.getOne)
router.use(authentication)
router.get('/admin/:id', CategoryController.getOne)
router.get('/', authorizationAdmin, CategoryController.getAll)
router.post('/', authorizationAdmin, CategoryController.create)
router.patch('/:id', authorizationAdmin, CategoryController.update)
router.delete('/:id', authorizationAdmin, CategoryController.destroy)
router.get('/details/:id', authorizationAdmin, CategoryController.getOne)

module.exports = router