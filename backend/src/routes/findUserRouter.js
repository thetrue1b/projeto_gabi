const { Router } = require('express');
const router = Router();
const { findUser } = require('../controllers/findUserController')

router.post('/findUser', findUser);

module.exports = router;