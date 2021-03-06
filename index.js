const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.json())

app.use(require('./routes/index.rout'))
app.use('/image', express.static(path.resolve(__dirname, 'image')));

mongoose.connect('mongodb+srv://mvdjabrail:1221@cluster0.5s8s8.mongodb.net/newsSite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
    console.log('Сервер запущен')
})