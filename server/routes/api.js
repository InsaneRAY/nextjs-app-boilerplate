// To handle specific route pattern
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    success: true,
    message: "You're requesting an API"
  });
});

module.exports = router;
