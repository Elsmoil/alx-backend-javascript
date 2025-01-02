// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async'); // Include your async function from 3-read_file_async

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ALX!\n');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents('database.csv')
      .then(() => res.end('Done!'))
      .catch((error) => res.end(`Error: ${error.message}`));
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
