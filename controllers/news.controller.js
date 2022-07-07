const News = require('../models/News.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.newsController = {
    postNews: async (req, res) => {
        try {
            const { text, category } = req.body
            const { authorization } = req.headers
            const [type, token] = authorization.split(' ')
            if (type !== 'Bearer') {
                return res.status(401).json('Неверный тип токена')
            }
            try {
                const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY)

                const news = await News.create({
                    text,
                    category,
                    user: payload.id 
                })
                res.json(news)

            } catch (e) {
                return res.status(401).json('Неверный токен')
            }

        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },

    deleteNews: async (req, res) => {
        const { id } = req.params
        try {
            const news = await News.findById(id)

            if (news.user.toString() === req.user.id) {
                await news.remove()
                return res.json('Удалено')
            }
            res.status(401).json('Ошибка. Нет доступа')
        } catch (error) {
            return res.status(401).json('Ошибка: ' + error.toString())
        }
    },
    getNews: async (req, res) => {
        try {
            const news = await News.find()
            res.json(news)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },
}
