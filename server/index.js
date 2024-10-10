const express = require('express');
const app = express();

// 允许跨域访问中间件
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/stream', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/octet-stream',
    // 'Transfer-Encoding': 'chunked',
  });

  let counter = 0;

  console.log('get');
  let mockText =
    '具体来说，可以使用 JavaScript 中的 setInterval() 函数和字符串截取方法来模拟打字机效果。例如，在实现 ChatGPT 的回复效果时，可以将回复内容以字符串的形式存储在一个数组中，然后使用 setInterval() 函数定时截取字符串并更新到页面上，从而实现打字机效果。';

  const interval = setInterval(() => {
    mockText += mockText;
    res.write(mockText);
    counter++;
    if (counter === 3) {
      clearInterval(interval);
      res.end();
    }
  }, 3000);
});

const port = 5200;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
