const express = require('express');
const router = express.Router();

const routes = require('./controller');

router.post('/', routes.userRegistration);

module.exports = router;
