const express = require('express');

const router = express.Router();

/* eslint import/no-dynamic-require: 0 */

router.all('/*', (req, res) => {
  return res.status(404).send();
});

module.exports = router;
