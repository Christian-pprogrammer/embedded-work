const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send("helloworld")
})

app.post('/transactions', (req,res) => {
    try{
        console.log("uploaded data", req.body);
        res.status(200).json(req.body);
    }catch(err) {
        res.status(400).json({
            error: err.message
        })
    }
})

app.listen(5000, ()=>{
    console.log('app listening on port 5000');
})