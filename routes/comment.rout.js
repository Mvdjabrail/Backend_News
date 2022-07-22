const { Router } = require('express')
const { commentController } = require('../controllers/comment.controller')
const authMiddlewares = require('../middlewares/auth.middlewares')

const router = Router()

router.post('/comment',authMiddlewares, commentController.postComment)
router.get('/comment/:id', commentController.getComment)
router.get('/comments', commentController.getComments)
router.delete('/comment/:id', authMiddlewares, commentController.deleteComment)

module.exports = router