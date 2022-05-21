// npm i express
// 導入 express 這個模組
const express = require('express');
// 利用 epxress 來建立一個 express application
const app = express();

// HTTP request
// method: get, post, put, delete, ...
app.get('/', (request, response, next) => {
  console.log('首頁');
  response.send('首頁');
});

app.get('/about', (request, response, next) => {
  response.send('About Me');
});

app.listen(3001, () => {
  console.log('Server start at 3001');
});
