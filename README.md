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
   
   
