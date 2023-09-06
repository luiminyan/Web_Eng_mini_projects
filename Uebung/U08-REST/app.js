// install express modul
const express = require("express");
// install filesystem modull
const fs = require('fs');
// install cors modul
const cors = require('cors');
const { fileURLToPath } = require("url");

// create express instance object
var app = express();
// use middleware
app.use(express.json());
app.use(cors());


// create server-side get methode
app.get("/myMovies", (req, res)=>{
    // read file function(readFileSync) from fs modul, parameter: (Pfad, Kodierung)
    var filmList = fs.readFileSync('./spielfilme.json', 'utf-8');
    // set response status 
    res.status(200);    //ok
    // response in json format and with filmList
    res.json(filmList);
});

// create put methode
app.put("/myMovies", (req, res)=>{
    
});


// start server, port 8080(HTTP)
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
