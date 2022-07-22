const { Router } = require('express')
const authMiddlewares = require('../middlewares/auth.middlewares')
const { userController } = require('../controllers/user.controller')
const router = Router()

router.get('/user', userController.getUser)
router.post('/user', userController.postUser)
router.post('/login', userController.login)
router.delete('/user/:id', userController.deleteUser)
router.patch('/user/:id', userController.patchUser)

module.exports = router;