# Web_Engineering_SoSe23
1. HTML basics
2. CSS<br>
   2.1 Selektoren: Universal*, Kind(>), Nachfahren( ), Nachbar(+), Geschwister(~)<br>
   2.2 display (flexbox, grid)<br>
3. Javascript bascis
4. Javascript 
5. EventListener & ES6 & Typescript（+ interface, different class creation）

6. Vue.js basics: <br>
   - v-if, v-if-else, v-else<br>
   - v-for="item in List"<br>
   - v-on:event="handleFunc" / @event=""<br>
   - v-bind:character="sth" / :character=""<br>

7. Vue.js Component:<br>
   - Global & static component:<br>
   Global: (Vue.component) <br>
   Static: (var xxx = {}; <root instance/parent comp.>.component{"comp-name":xxx}) <br>
   - props + v-bind: data transfer Parent->Child <br>
   - child component event handling <br>
     in child component/DOM(create user-def-event): v-on:<event>="$emit("user-def-event", argu.)"<br>
     argument: <child component .data>: func(){return {object{}}}, the object is the argument <br>
     in parent ~ (handle the u-d-event): v-on:<u-d-event>="call func."

8. REST / fetchAPI (client side) / express.js (server side) <br>
   - cors.js: for resource safety
   - express.js: simplified server creation and deklaritive routing(GET, PUT, POST, DELETE) <br>
   - client side: example: in HTML file, create request by fetch() <br>
   - server side: in <app>.js file, create reply functions <br>

9. Koa.js / Pug.js
   - koa: promised based controll flow
      - modules: koa, koa-router, koa-bodyparser, (possible) fs
      - install koa: const Koa = require('koa');
      - create koa object: const app = new Koa();
      - ctx instead of req and res
      - error handling:
         - (in router.method) ctx.throw(status-code, "msg.")
         - app.on('error', err=>{...});
      - mixin: reusable blocks
         - create mixin block: <br>
           mixin <mixin-name> (args.) <br>
           <tab or blank>...
         - use mixin: - <mixin-name>(args.)
      - app<br>
        .use(<router>.allowedMethods)<br>
        .use(bodyparser())<br>
        .use(<router>.routes())<br>
      - app.listen(<port: 8080(if http)>, ()=>{...})
  - pug: remplate machine
       - modules: pug / koa-pug, path
       - read path: const path = require('path');
       - use pug in server
          - koa: create pug object: <br>
            const Pug = new pug({ <br>
               // all pug files are stored in dir named 'views' <br>
               viewPath: path.resolve(__dirname, 'views'); <br>
               app: app
            }); <br> 
          - in method: router.<method>('path', async ctx => {await ctx.render('<pug-file-name>', {parameter(s)});});
          - express:<br>
             app.set('views', path.join(__dirname, 'views')); <br>
             app.set('view engine', 'pug');<br>
   
          - loop in pug: <br>
                each item in itemList <br>
                  ... <br>
         - if ...<br>
              ...<br>
           else ...<br>
           
10. Datenbank / Sequelize
      
