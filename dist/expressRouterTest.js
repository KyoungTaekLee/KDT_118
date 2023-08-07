"use strict";

var express = require('express');
var router = express.Router();

// 루트 경로에 대한 요청 처리
router.get('/', function (req, res) {
  res.send('Hello, Express!');
});

// '/about' 경로에 대한 요청 처리
router.get('/about', function (req, res) {
  res.send('This is the about page.');
});

// '/contact' 경로에 대한 요청 처리
router.get('/contact', function (req, res) {
  res.send('This is the contact page.');
});
module.exports = router;