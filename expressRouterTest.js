const express = require('express');
const router = express.Router();

// 루트 경로에 대한 요청 처리
router.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// '/about' 경로에 대한 요청 처리
router.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// '/contact' 경로에 대한 요청 처리
router.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});

module.exports = router;
