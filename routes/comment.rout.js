const { Router } = require('express')
const { commentController } = require('../controllers/comment.controller')
const authMiddlewares = require('../middlewares/auth.middlewares')

const router = Router()

router.post('/comment',authMiddlewares, commentController.postComment)
router.get('/comment/:id', commentController.getComment)
module.exports = router