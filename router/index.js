const router = require('express').Router()
const postRouter = require('./postRouter')
const categoryRouter = require('./categoryRouter')
const viewRouter = require('./viewRouter')
const commentRouter = require('./commentRouter')
const userRouter = require('./userRouter')
const tagsRouter = require('./tagsRouter.js')

router.use('/Post', postRouter)
router.use('/Category', categoryRouter)
router.use('/view', viewRouter)
router.use('/comment', commentRouter)
router.use('/User', userRouter)
router.use('/tags', tagsRouter)

module.exports = router