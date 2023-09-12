const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const fs = require('fs');

const Pug = require('koa-pug');
const path = require('path');


// create server object
const app = new Koa();
var routerMusic = new Router({
    prefix:'/music'
});
var routerFilm = new Router({
    prefix: '/film'
});

const pug = new Pug({
    viewPath: path.resolve(__dirname, 'views'),
    app: app
});

routerMusic
    .get('/', async ctx=>{
        /* const musicData = fs.readFileSync('./musicLib.json','utf-8');
        // 错误： 如果想读取json文件里面的某一项，需要先parse
        ctx.response.body = JSON.parse(musicData).songs; */
        // use pug
        const musicData = JSON.parse(fs.readFileSync('./musicLib.json', 'utf-8'));
        await ctx.render('index', {itemList: musicData.songs});
        ctx.response.status = 200;
    })
    
    .put('/', ctx=>{
        let musicItem = ctx.request.body;
        if (typeof musicItem.titel == 'undefined' && typeof musicItem.artist == 'undefined'){
            // server error
            ctx.throw(500, 'No information provided');
        }
        else if (typeof musicItem.titel == 'undefined' || typeof musicItem.artist == 'undefined') {
            // client side error
            ctx.throw(400, 'Input information missing');
        }

        let musicData = JSON.parse(fs.readFileSync('musicLib.json', 'utf-8'));

        musicData.songs.push(musicItem);
        // 写入json文件时需要stringify
        musicData = JSON.stringify(musicData);
        fs.writeFileSync('musicLib.json', musicData);
        ctx.response.status = 202;
    });

app.on('error', err=>{
    console.log('Error: ', err);
});

app.use(routerMusic.allowedMethods())
    .use(routerFilm.allowedMethods())
    .use(bodyParser())
    .use(routerMusic.routes())
    .use(routerFilm.routes())

app.listen(8080, ()=>{
    console.log("Server running at port 8080");
});