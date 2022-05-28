// npm i express
// 導入 express 這個模組
const express = require('express');
// 利用 epxress 來建立一個 express application
const app = express();

// client - server
// client send request -------> server
//                     <------- response
// request-response cycle
// client: browser, postman, nodejs,...

// express 是一個由 middleware (中間件) 組成的世界
// request --> middleware1 --> middleware2 --> .... --> response
// 中間件的「順序」很重要!!
// Express 是按照你安排的順序去執行誰是 next 的
// middleware 中有兩種結果：
// 1. next: 往下一個中間件去
// 2. response: 結束這次的旅程 (req-res cycle)

// 一般中間件
app.use((request, response, next) => {
  console.log('我是一個沒有用的中間件 AAAA');
  next();
  // response.send('我是中間件');
});

app.use((request, response, next) => {
  console.log('我是一個沒有用的中間件 BBBB');
  next();
});

// HTTP request
// method: get, post, put, delete, ...
// 路由中間件
app.get('/', (request, response, next) => {
  console.log('首頁CCC');
  // 送回 response，結束了 request-response cycle
  response.send('首頁');
});

app.get('/about', (request, response, next) => {
  console.log('about');
  response.send('About Me');
});

app.listen(3001, () => {
  console.log('Server start at 3001');
});
