const {Router} = require('express')
const { newsController } = require('../controllers/news.controller')
const authMiddlewares = require('../middlewares/auth.middlewares')

const router = Router()

router.post('/news', newsController.postNews)
router.delete('/news/:id', authMiddlewares, newsController.deleteNews)
router.get('/news', newsController.getNews)

module.exports = router;