const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const data = 'hello world';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(data);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })