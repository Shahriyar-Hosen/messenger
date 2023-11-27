const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');
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
