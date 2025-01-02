// 7-http_express.js
const express = require('express');
const countStudents = require('./3-read_file_async'); // Async read function for handling database
const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then(() => res.send('Done!'))
    .catch((error) => res.status(500).send(error.message));
});

app.get('/students/:major', (req, res) => {
  const major = req.params.major;
  if (major !== 'CS' && major !== 'SWE') {
    return res.status(500).send('Major parameter must be CS or SWE');
  }

  countStudents('database.csv')
    .then(() => res.send(`List: ${major}`)) // You should tailor this part to display based on major
    .catch((error) => res.status(500).send('Cannot load the database'));
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
