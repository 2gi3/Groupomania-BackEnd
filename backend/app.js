// mongoDB connection link: mongodb+srv://ocproject6:<password>@project6.lvb15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoDB project6 password: pr6oc
require("dotenv").config({path: __dirname + '/.env'});
// import * as ENV from '.env'
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const userPostsRoutes = require('./routes/user-posts')
const path = require('path');
const db = require('./config/db.config');
// mongoose.connect('mongodb+srv://ocproject6:pr6oc@project6.lvb15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// mongoose.connect(process.env['KEY']) .then(() => {
//     console.log('Successfully connected to MongoDB Atlas!');
//   })
//   .catch((error) => { 
//     console.log('Unable to connect to MongoDB Atlas!');
//     console.error(error);
//   });
db.authenticate().then( () =>console.log("Data  Base Connected !")).catch((err) => console.log(err));

  app.use(express.json());
  app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes) 
app.use('/api/user-posts', userPostsRoutes) 


module.exports = app;