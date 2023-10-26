const Express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

// create express object
var app = new Express();
app.use(cors(), Express(), bodyparser.json(), bodyparser.urlencoded({extended:false}));
var pisten = {
    '1' : {
        'name':'Heuberg',
        'difficulty': "blue", 
        'open': true
    },
    '2': {
        'name':'01ympiabahn',
        'difficulty': "black", 
        'open': true
    },
    '3': {
        'name': 'Kanzelwand Talfahrt',
        'difficulty': 'blue',
        'open': false
    }
}

// routes
app.get('/pisten', (req, res)=>{
    res.json(pisten);
    res.status(200);
});

app.get('/pisten/:pistenId', (req, res)=>{
    let pistenId = req.params.pistenId;
    const pistenItem = pisten[pistenId];
    if (!pistenItem) {
        res.status(404).json('Piste not found');
    } 
    else {
        res.json(pistenItem);
        res.status(201);
    }
});

app.put('/pisten', (req, res)=>{
    // read client request
    const newPisten = req.body;
    const newId = Object.keys(pisten).length + 1;
    pisten[newId] = newPisten;
    res.status(201).json(pisten);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running at port ${port} !`);
});