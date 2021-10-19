const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

const User = mongoose.model('User', { name: String,age: Number });

const artem = new User({ name: 'Artem', age: 25 });
artem.save().then(() => console.log('Success'));

const data = 'hello world';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(data);
})

app.get('/name', (req, res) => {
  res.send('');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })