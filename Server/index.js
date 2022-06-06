const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = 8000;
const database = require('./database/index');
const colorsRouter = require('./Router/Colors');

app.use('/colors',colorsRouter);

app.get('/',(req,res)=>{
    res.send('Api Running!!')
});

app.listen(PORT,()=>{
    console.log(`listen to port ${PORT}`);
})