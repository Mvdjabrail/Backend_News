const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'image')
    },
    filename(req, file, cb){
        cb(null, file.originalname)
    }
}) 

const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg']

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)){
        cb(null, true)
    }else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})