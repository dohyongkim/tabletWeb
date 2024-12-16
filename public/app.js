const express = require('express');
const app = express();
const port = 3000;

// JSON 파싱 미들웨어
app.use(express.json());

// BLE 스캔 요청 API 엔드포인트
app.post('/startScan', (req, res) => {
    // BLE 스캔 요청을 Android 앱으로 전달하는 로직
    console.log("BLE 스캔 요청 수신");
    // Android로부터 성공 응답 받았다고 가정
    res.status(200).json({ message: "BLE 스캔 시작 요청 전송 완료" });
});

// PIN 전송 API 엔드포인트
app.post('/sendPin', (req, res) => {
    const { pin } = req.body;
    if (pin && pin.length === 4) {
        console.log(`Received PIN: ${pin}`);
        // Android 앱으로 PIN 전송 로직 호출
        res.status(200).json({ message: "PIN 전송 요청 성공" });
    } else {
        res.status(400).json({ message: "유효하지 않은 PIN" });
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
