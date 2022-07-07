const { Router } = require('express')

const router = Router()

router.use(require('./category.rout'))
router.use(require('./comment.rout'))
router.use(require('./news.rout'))
router.use(require('./user.rout'))

module.exports = router

