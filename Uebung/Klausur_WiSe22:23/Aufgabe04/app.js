const Express = require('express');
const cors = require('cors');

// create express object
var app = new Express();
app.use(cors(), Express());
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
    let pistenId = req.param.pistenId;
    const pistenItem = pisten[pistenId];
    if (!pistenItem) {
        res.status(404);
    } 
    else {
        res.json(pistenItem);
        res.status(201);
    }
});

app.put('/pisten', (req, res)=>{
    // read client request
    let newPisten = req.body;
    if (!newPisten || pisten[newPisten.id]) {
        res.status(400);
    }
    else {
        pisten[newPisten.id] = newPisten;
        res.status(201);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running at port ${port} !`);
});