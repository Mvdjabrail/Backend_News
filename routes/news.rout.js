const { Router } = require('express')
const { newsController } = require('../controllers/news.controller')
const authMiddlewares = require('../middlewares/auth.middlewares')
const fileMiddlewares = require('../middlewares/file.middlewares')


const router = Router()

router.post('/news', fileMiddlewares.single("image"), newsController.postNews)
router.delete('/news/:id', authMiddlewares, newsController.deleteNews)
router.get('/news', newsController.getNews)
router.get('/news/:id', newsController.getNewsById)

module.exports = router;