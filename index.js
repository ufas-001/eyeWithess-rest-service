const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('mongoose')

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');


//DB config
const db = require('./config/keys').mongoURI


// Connect to mongoDB
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB Connected"))
  .catch((err) => console.log(err));

// Home Route
app.get('/', (req, res) => res.send('Welcome to kwara state government eye withness app'))


// Linked Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/post',post)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`))