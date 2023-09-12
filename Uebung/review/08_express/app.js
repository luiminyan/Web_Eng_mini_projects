// install express, cors, fs
const Express = require('express');
const fs = require('fs');
const cors = require('cors');
// create express object
var app = Express();
// middleware
// 错误： 使用Express.json用来bodyparser
app.use(Express.json(), cors());
// route
app.get('/myMovies', (req,res)=>{
    // read from fs
    const moviesData = fs.readFileSync('spielfilme.json','utf-8');
    // add in response
    res.json(moviesData);
    res.status(200);
});

app.put('/myMovies', (req, res)=>{
    let moviesData = JSON.parse(fs.readFileSync('./spielFilme.json', 'utf-8'));
    let movieItem = req.body;
    moviesData.filme.push(movieItem);
    // 错误：写入文件时，使用stringify，转换为JSON格式
    moviesData = JSON.stringify(moviesData);
    // 错误：写对文件格式！！！
    fs.writeFileSync('./spielFilme.json', moviesData);
    console.log('Item added');
    res.status(201);
});

app.delete('/myMovies', (req,res)=>{
    let moviesData = JSON.parse(fs.readFileSync('./spielfilme.json','utf-8'));
    let movieItem = req.body;
    let isFound = false;
    for (itemIndex in moviesData.filme) {
        if (moviesData.filme[itemIndex].titel == movieItem.titel) {
            isFound = true;
            moviesData.filme.splice(itemIndex, 1);
            // js -> json
            moviesData = JSON.stringify(moviesData);
            fs.writeFileSync('spielfilme.json', moviesData);
            break;
        }
    }
    if (!isFound) {
        console.log('Film not found!');
        res.status(400).json('Bad request: item not found');
    }
    else {
        console.log('Item deleted!');
        res.status(200);
    }
});

// start server
app.listen(8080, ()=>{
    console.log("Server running at port 8080.");
})