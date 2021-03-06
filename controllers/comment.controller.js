const Comment = require('../models/Сomment.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.commentController = {
    postComment: async (req, res) => {
        try {
            const { text, news } = req.body
            const { authorization } = req.headers
            const [type, token] = authorization.split(" ")

            if (type !== 'Bearer') {
                return res.status(401).json('Неверный тип токена')
            }
            try {
                const payload = await jwt.verify(token, process.env.SECRET_JWT_KEY)

                const postComment = await Comment.create({
                    text,
                    news,
                    user:payload.id
                })
                res.json(postComment)

            } catch (error) {
                return res.status(401).json('Неверный токен')
            }
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },
    getComment: async (req, res) => {
        try {
            const news = await Comment.find({news: req.params.id})
            res.json(news)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },

    getComments: async (req, res) => {
        try {
            const news = await Comment.find()
            return res.json(news)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },
    deleteComment: async (req, res) => {
        const { id } = req.params
        try {
            const news = await Comment.findById(id)

            if (news.user.toString() === req.user.id) {
                await news.remove()
                return res.json('Удалено')
            }
            res.status(401).json('Ошибка. Нет доступа')
        } catch (error) {
            return res.status(401).json('Ошибка: ' + error.toString())
        }
    },

}