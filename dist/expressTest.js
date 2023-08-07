"use strict";

var express = require('express');
var app = express();
var port = 3002;
var router = require('./expressRouterTest');
app.use('/', router);

// 서버 실행
app.listen(port, function () {
  console.log("\uC11C\uBC84\uAC00 http://localhost:".concat(port, " \uC5D0\uC11C \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4."));
});