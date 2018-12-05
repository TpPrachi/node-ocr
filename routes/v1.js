const express = require('express');
const path = require('path');

const router = express.Router();

const v = `../modules/${path.basename(__filename, '.js')}`;

/* eslint import/no-dynamic-require: 0 */
router.use('/user', require(`${v}/user/userRoute`));
router.all('/*', (req, res) => {
  return res.status(404).send({ error: 'Not found' });
});

module.exports = router;
