// koa: koa server
const Koa = require('koa');
// koa-router: for dealing with HTTP request
const Router = require('koa-router');
// read request body
const bodyParser = require('koa-bodyparser');
// file system
const fs = require('fs');

// aufgabe 2:
// koa-pug
const Pug = require('koa-pug'); 
// path
const path = require('path');

// initialize server
const app = new Koa();
var routerMusic = new Router({
    // central definition of path
    prefix: '/music'
});

// Aufgabe 2
var routerFilm = new Router({
    prefix: '/film'
});

routerMusic
    .get('/', async ctx=>{
        /* // write the content of file musicLib in the response to the clients
        ctx.response.body = fs.readFileSync('musicLib.json', 'utf-8');
        ctx.response.status = 200; */
        const musicData = JSON.parse(fs.readFileSync('musicLib.json', 'utf-8'));
        const itemList = musicData.songs;
        // render the pug file with musicLib 
        await ctx.render('index', {itemList});
        ctx.response.status = 200;
    })

    // PUT methods
    .put('/', ctx=>{
        // store the content of a file into a variable
        let musicLib = JSON.parse(fs.readFileSync('musicLib.json', 'utf-8'));
        // push content from request into musicLib
        musicLib.songs.push(ctx.request.body);

        // Task1: error-handling
        if((typeof ctx.request.body.titel == 'undefined') && (typeof ctx.request.body.artist == 'undefined')){
            // create error by ctx.throw(<code>, text)
            ctx.throw(500, 'Keine Information erhalten!');
        }
        else if ((typeof ctx.request.body.titel == 'undefined') || (typeof ctx.request.body.artist == 'undefined')){
            ctx.throw(400, 'Erhaltende Information nicht vollständig');
        }

        // write musicLib back into file, with stringify (JS->JSON)
        fs.writeFileSync('musicLib.json', JSON.stringify(musicLib));
        // write status code
        ctx.response.status = 202;  // successful
    });

// Aufgabe 2
routerFilm
    .get('/', async ctx=>{
        // read filmLib.json
        let itemList = JSON.parse(fs.readFileSync('filmLib.json', 'utf-8'));
        // render koa-pug
        await ctx.render('index', itemList);
        ctx.response.status = 200;
    });

// Aufgabe 1, error-handler
app.on('error', err=>{
    console.log('The server encountered an error: ', err);
});

// Aufgabe 2: create pug object
const pug = new Pug({
    viewPath: path.resolve(__dirname, 'views'),
    app: app
});

// schnittsctelle / middlewares
app.use(routerMusic.allowedMethods())
    // use bodyparser for HTTP requests
    .use(bodyParser())
    // use router music
    .use(routerMusic.routes())
    // use router film
    .use(routerFilm.routes());

app.listen(8080, ()=>{
    console.log("Server running on port 8080");
});

