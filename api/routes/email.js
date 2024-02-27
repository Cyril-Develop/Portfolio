const router = require('express').Router();

const ctrl = require('../controllers/email');

router.post('/email', ctrl.sendEmail);

module.exports = router;