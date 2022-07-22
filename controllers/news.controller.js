const News = require('../models/News.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.newsController = {
    postNews: async (req, res) => {
        try {
            const { text, category, title } = req.body


            const news = await News.create({
                text,
                category,
                title,
                image: req.file.path
            })

            return res.json(news)
        } catch (error) {
            return res.status(401).json({ error: error.toString() })
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
    getNewsById: async (req, res) => {
        try {
            const news = await News.findById(req.params.id)
            res.json(news)
        } catch (error) {
            return res.status(401).json(error.toString())
        }
    },
}
