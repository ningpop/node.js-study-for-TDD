const express = require('express')

const PORT = 5000;

const app = express();

app.use(express.json()); // Frontend로부터 받은 요청에 들어있는 body를 사용하기 위해 express 내장 미들웨어 함수를 사용
app.get('/', (req, res) => { // Frontend로부터 root route에 get 요청을 받으면
    res.send('Hello World'); // 응답으로 'Hello World'를 전송
});

app.listen(PORT);
console.log('Running on port ${PORT}');