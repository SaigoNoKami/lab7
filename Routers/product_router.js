const Router = require('express')
const controller = require('../controllers/product_controller')
const router = new Router()

router.post('/post', controller.post)

router.get('/get', controller.get)

router.put('/put', controller.put)

router.delete('/delete', controller.delete)

module.exports = router
