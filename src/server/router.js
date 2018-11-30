const Router = require('express').Router
const router = new Router()
const path = require('path')

router.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client/index.js')))

module.exports = router