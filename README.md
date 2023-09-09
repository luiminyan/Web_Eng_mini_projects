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
      - ctx instead of req and res
      - error handling:
         - (in router.method) ctx.throw(status-code, "msg.")
         - app.on('error', err=>{...});
      - mixin:
   
