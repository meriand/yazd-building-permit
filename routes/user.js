const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('لیست کاربران');
});

module.exports = router;


const { getAllUsers } = require('../controllers/user');

router.get('/', getAllUsers);

module.exports = router;
