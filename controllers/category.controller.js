const { JsonWebTokenError } = require('jsonwebtoken')
const Category = require('../models/Сategory.model')
require('dotenv').config()
const jwt = require('jsonwebtoken')


module.exports.categoryController = {
    postCategory: async (req, res) => {
        try {
            const { text } = req.body
            // const { authorization } = req.headers
            // const [type, token] = authorization.split(' ')
            // if (type !== 'Bearer') {
            // return res.status(401).json('Неверный тип токена')
            // }
            // try {
            // const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY)

            const category = await Category.create({
                text,
                // user: payload.id
            })
            res.json(category)
        } catch (error) {
            return res.status(401).json('Неверный токен')
        }
        // } catch (error) {
        // return res.status(401).json('Ошибка при добавлени категории')
        // }
    },
    getCategory: async (req, res) => {
        try {
            const category = await Category.find()
            res.json(category)
        } catch (error) {
            return res.status(401).json('Ошибка при выводе категории')

        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndRemove(req.params.id)
            res.json('Категория удалена')
        } catch (error) {
            return res.status(401).json('Ошибка при удалении категории')

        }
    },
    patchCategory: async (rea, res) => {
        try {
            const patchCategory = await Category.findByIdAndUpdate(req.params.id ,{
                text
            })
            res.json(patchCategory)
        } catch (error) {
            return res.status(401).json('Ошибка при изменении категории')
        }
    }
}