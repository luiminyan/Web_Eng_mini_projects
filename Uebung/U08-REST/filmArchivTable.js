// create btn instance and connect with DOM element
// var showAllFilmbtn = document.getElementById('allFilms');
var showAllFilmbtn = document.querySelector('#allFilms');
// addEventListener on btn
showAllFilmbtn.addEventListener('click', ()=>{
    // create GET-request by fetch()
    fetch("http://localhost:8080/myMovies", {
        // define the request method (get, put, post, delete)
        method:'get',
        // expected header information of reply 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        // .then... : wait for the answer from server
        // response: response from server as parameter
    }).then(function(response){
        // response from server is always firstly a promise
        // if a promise is fullfilled
        // data is sent from server
        response.json().then(function(data){
            let filmListe = JSON.parse(data);
            showFilmTable(filmListe);
        });
    });
});

const showFilmTable = (filmListe)=>{
    // create format instance
    let table = 
        `<tr>
            <th>Titel</th>
            <th>Erscheinungsdatum</th>
            <th>Regie</th>
        </tr>`;
    for (i=0; i<filmListe.filme.length; i++){
        table += "<tr><td>" + filmListe.filme[i].titel + "</td><td>" + filmListe.filme[i].datum + "</td><td>" + filmListe.filme[i].regie + "</td></tr>";
    }
    // replace the content of DOM element of id 'filmTable'
    document.getElementById("filmTable").innerHTML = table;
};