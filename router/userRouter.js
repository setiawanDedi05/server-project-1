const UserController = require('../controller/userController')
const { authentication, authorizationAdmin } = require('../midleware/auth')

const router = require('express').Router()

router.get('/user', UserController.getAll)
router.post('/login', UserController.login)
router.post('/signup', UserController.create)
router.use(authentication)
router.get('/', authorizationAdmin, UserController.getAll)
router.get('/details/:id', authorizationAdmin, UserController.getOne)
router.post('/admin', authorizationAdmin, UserController.create)
router.patch('/:id', authorizationAdmin, UserController.update)
router.delete('/:id', authorizationAdmin, UserController.destroy)

module.exports = router