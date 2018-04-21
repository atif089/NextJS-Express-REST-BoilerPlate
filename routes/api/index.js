// Libs
const express = require('express');

const router = express.Router();

/**
 * GET handle for /api/user
 */
router.get('/api/*', (req, res) => {
  res.json({
    data: 'Hello World!',
  });
});

module.exports = router;
