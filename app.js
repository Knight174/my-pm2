const http = require('http');
const server = http.createServer((req, res) => {
  // log
  console.log('log: current time => ', Date.now());
  // error
  console.error('error: current time => ', Date.now());

  // 模拟崩溃
  if (req.url === '/error') {
    throw new Error('/error 程序崩溃');
  }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ errno: 0, msg: 'pm2 test server 3' }));
});

server.listen(8000);
console.log(
  `NODE_ENV is ${process.env.NODE_ENV}. Server is listening on port: http://localhost:8000`
);
