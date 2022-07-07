const { Router } = require('express')
const { categoryController } = require('../controllers/category.controller')

const router = Router()

router.post('/category', categoryController.postCategory)
router.delete('/category/:id', categoryController.deleteCategory)
router.patch('/category/:id', categoryController.patchCategory)
router.get('/category', categoryController.getCategory)

module.exports = router