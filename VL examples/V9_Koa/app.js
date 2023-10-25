// install Koa.js modul
const Koa = require('koa');
// koa-router: routing modul
const Router = require('koa-router');
// koa-bodyarser: parse Daten (json, form, text)
const BodyParser = require('koa-bodyparser');

// create Koa object
const app = new Koa();
// create router object
const router = new Router();

router
    // receive POST request
    .post('/', (ctx)=>{
        ctx.response.body = ctx.request.body;
    })
    // receive GET request
    .get('/12', (ctx) => {
        ctx.body = 'GET request';
    });

/* app.use(async ctx => {
    ctx.body = "Hello world!";
}); */

app
    .use(router.allowedMethods())
    .use(router.routes())

app.listen("3000", ()=>{
    console.log("App runs at port 3000.");
});