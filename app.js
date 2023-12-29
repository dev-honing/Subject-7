// app.js

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 미들웨어 설정으로 정적 파일들 제공
app.use(express.static(path.join(__dirname, 'public')));

// 루트 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버 ON: http://localhost:${port}`);
});
