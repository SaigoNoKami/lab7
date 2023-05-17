const Router = require('express')
const controller = require('../controllers/worker_controller')
const avatar_controller = require('../controllers/avatar_controller')
const router = new Router()
const multer = require("multer");
const path = require('path');


var upload = multer({ dest: 'uploads/' })


router.post('/post', controller.post)

router.get('/get', controller.get)

router.put('/put', controller.put)

router.delete('/delete', controller.delete)

router.post('/avatar', upload.single('avatar'), avatar_controller.add_avatar)

module.exports = router
