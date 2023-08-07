const express = require('express');
const app = express();
const port = 3002;

const router = require('./expressRouterTest')

app.use('/',router);

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
