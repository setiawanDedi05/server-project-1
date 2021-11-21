const ViewController = require('../controller/viewController')

const router = require('express').Router()

router.get('/', ViewController.getAll)
router.post('/', ViewController.create)

module.exports = router