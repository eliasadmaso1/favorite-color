const CONNECTION_STRING = process.env.CONNECTION_STRING;

const mongoose = require('mongoose');

mongoose.connect(CONNECTION_STRING,{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=> console.log("you connected to database"))
.catch(err => console.log("err:",err));

const db = mongoose.connection;
module.exports = db;

