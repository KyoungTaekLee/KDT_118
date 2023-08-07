// 105 node.js에서 파일을 읽는 코드

const fs = require('fs');

const filePath = 'hello.txt'; // 실제 파일의 경로와 파일명으로 바꿔주세요.

// 파일 읽기 (비동기적 방식)
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('파일을 읽는 도중 오류가 발생했습니다.');
    console.error(err);
    return;
  }

  console.log('파일 내용:',data);
});




// 106 node에서 http서버를 생성하는 코드작성

const http = require('http');

const port = 3001; // 서버가 listen할 포트 번호

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  // 요청이 들어올 때마다 실행되는 콜백 함수
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world! This is your HTTP server!');
});

// 서버를 지정한 포트로 listen
server.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 시작되었습니다.`);
});




// 108 node에서 이벤트 발생키기고 그것을 처리하는 코드

const EventEmitter = require('events'); // EventEmitter 클래스를 임포트

// 새로운 EventEmitter 인스턴스 생성
const myEmitter = new EventEmitter();

// 이벤트를 정의하고 처리하는 코드
// 'myEvent'라는 이름의 이벤트 정의
myEmitter.on('myEvent', (data) => {
    console.log('이벤트 발생!', data);
});

// 이벤트 발생시키기
myEmitter.emit('myEvent', { message: 'Hello, world!' });
