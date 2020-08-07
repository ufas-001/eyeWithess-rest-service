const express = require('express');
const router =  express.Router();


router.get('/userProfile', (req, res) => res.send('User profile works fine'))


module.exports = router