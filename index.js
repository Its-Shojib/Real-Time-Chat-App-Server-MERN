const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('Chat app is running!');
})

app.listen(port, () => {
  console.log(`Real time chat app listening on ${port}`);
})