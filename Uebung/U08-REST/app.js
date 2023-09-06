// install express modul
const express = require("express");
// install filesystem modull
const fs = require('fs');
// install cors modul
const cors = require('cors');

// create express instance object
var app = express();
// use middleware
app.use(express.json());
app.use(cors());


// create server-side get method
app.get("/myMovies", (req, res)=>{
    // read file function(readFileSync) from fs modul, parameter: (Pfad, Kodierung)
    var filmList = fs.readFileSync('./spielfilme.json', 'utf-8');
    // set response status 
    res.status(200);    //ok
    // response in json format and with filmList / 'data' at client side
    res.json(filmList);
});

// create put method
app.put("/myMovies", (req, res)=>{
    // take info from req.body，不用更改格式，直接读
    var newFilm = req.body;
    // read file(JSON) from file-system
    var filmeFile = fs.readFileSync("./spielfilme.json","utf-8");
    // JSON.parse: json -> JavaScript,原因：只能更改javascript文件
    var filmeData = JSON.parse(filmeFile);
    // add newFilm(JavaScript) from req. into file(now JavaScript) content
    filmeData.filme.push(newFilm);
    // JSON.stringify: javascript -> JSON，传输的时候只能传json
    filmeData = JSON.stringify(filmeData);
    // write filmeData(JSON) into filesystem
    fs.writeFileSync('./spielfilme.json', filmeData);

    // log
    console.log("Film item added in file.");
    // response
    res.status(201);    // 201: created
});

// create delete method
app.delete("/myMovies", (req, res)=>{
    var isFound = false;
    // read request from body, transform from JSON->JavaScript
    var titelInput = req.body.titel;
    // read file from server file system, JSON->JavaScript
    var filmListData = JSON.parse(fs.readFileSync("./spielfilme.json", "utf-8"));
   
    // search for titel in filmList.filme
    for (index in filmListData.filme){
        if (titelInput == filmListData.filme[index].titel){
            // found film in filmList
            isFound = true;
            // delete from array filmListData
            filmListData.filme.splice(index,1);
            // JavaScript->JSON
            filmListData = JSON.stringify(filmListData);
            // write into filesystem
            fs.writeFileSync("./spielfilme.json", filmListData);
            break;
        }
    }
    // if file found
    if (isFound) {
        res.status(200);    //ok
        console.log("Item is found in file and deleted");
    }
    else {
        res.status(400);
        console.log("Item not found.");
    }
});

// start server, port 8080(HTTP)
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
