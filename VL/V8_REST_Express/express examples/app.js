// install express modul
const express = require("express");
// install cors modul
const cors = require("cors");
// create express instance
var app = express();
// middleware
app.use(express.json(), cors());
// start server
app.listen(8080, ()=>{
    console.log("Server runnning on port 8080.");
});

// deklaratives Routing
// GET: 在/myDataSet路径下可以看到的回复
app.get("/myDataSet", (req, res)=>{
    res.json(["Tony", "Lisa", "Michael"]);
});

// PUT
// create placeholder for the document
let contracts = [];

app.put("/contract", (req,res)=>{
    // get they request body
    let contractTopics = Object.keys(req.body);
    // create check function, to check if the request correct in format
    const check = (topic) => contractTopics.includes(topic);
    // mustHaveTopics
    const mustHaveTopics = ["titel", "leistung", "signature"];
    // if request correct
    if(mustHaveTopics.every(check)){
        // create or update file
        contracts.push(req.body);
        // status = OK
        res.status(200);
    }
    // request incorrect
    else{
        // not acceptable
        res.status(406);
    }
    // server send response with message: 
    res.send("Requested contract Ressource.");
});

// POST: create sub file for existing resource
// use the file-system modul
const fs = require("fs");
app.post("/logMe", (req, res)=>{
    // append file with name 'logfile.txt' in filesystem with req.body.msg
    fs.appendFile('logfile.txt', req.body.msg,
        function(err){
            if (err) throw err;
            console.log('Saved!');
        });
    res.send('Post received! Added log entry.');
});

// DELETE: delete resource of URI
app.delete('/blog', (req, res)=>{
    let filePath = req.body.file;
    //Dateisystem: blog/articles/01/cat.jpg
    fs.unlink("./blog" + filePath, (err)=>{
        if (err) throw err;
        console.log("Successfully deleted " + filePath);
    });
    // response to client
    res.send("Got a DELETE request at /blog");
});