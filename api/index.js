const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');
const User = require('./models/user');
const localStrategy = require('passport-local').Strategy;

dotenv.config({path: path.join(process.cwd(), '.env')});

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};

const app = express();
const port = config.port;

app.use(bodyParser.urlencoded({express: true}));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose
  .connect(config.db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.log('🚀 Error Connecting to db ~ .then ~ err:', err);
  });

app.listen(port, () => {
  console.log('🚀 Server running on port: ~ ', port);
});

// endpoints for registration of the user
app.post('/register', (req, res) => {
  const {name, email, password, image} = req.body || {};

  // create a new user object
  const result = new User({name, email, password, image});
  console.log('🚀 ~ file: index.js:56 ~ app.post ~ result:', result);

  // save the user to the database
  result
    .save()
    .then(() => {
      res.status(200).json({message: 'User created successfully'});
    })
    .catch(err => {
      console.log(
        '🚀 ~ file: index.js:64 ~ app.post ~ Error registering the user ~ err:',
        err,
      );
      res
        .status(500)
        .json({message: 'Error registering the user ' + err.message});
    });
});
