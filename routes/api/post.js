const express = require('express')
const router =  express.Router()

router.get('/withnesspost', (req, res) => res.send('Withness post works'))

module.exports = router