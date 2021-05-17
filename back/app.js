const express = require('express');
const postRouter = require('./routes/post');
const db = require('./models');

const app = express();
const port = 8001;

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello1' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter);

app.listen(port, () => {
  console.log(`server is listening: http://localhost:${port}`);
});
