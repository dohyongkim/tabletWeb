const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 제공 (HTML, JS 등)
app.use(express.static('public'));

// 기본 경로 설정
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
