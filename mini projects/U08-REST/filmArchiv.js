// connect with DOM elements
var previousBtn = document.getElementById('previous');
var nextBtn = document.getElementById('next');
var filmDiv = document.getElementById('film');

var filmPosition = 0;
var filmListLength;

function displayFilm(filmPosition) {
    // create get request
    fetch("http://localhost:8080/myMovies", {
        method:'get',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        // if response is in json format, then...
        response.json().then(function(data){
            // extract the content from data
            let filmListe = JSON.parse(data);

            // implement the filmListLength
            filmListLength = filmListe.filme.length;

            // call func showFilmDetails
            showFilmDetails(filmListe, filmPosition);
        });
    });
}

function showFilmDetails(filmListe, position){
    // set content of film div
    filmDiv.innerHTML = "Titel: " + filmListe.filme[position].titel + "<br>Erscheinungsdatum: " + filmListe.filme[position].datum + "<br>Regie: " + filmListe.filme[position].regie + "<br>";
}

// show film by current position
displayFilm(filmPosition);

// create eventListeners
// previous button
previousBtn.addEventListener('click', ()=>{
    if (filmPosition > 0) {
        filmPosition--;
        displayFilm(filmPosition)
    }
});

nextBtn.addEventListener('click', ()=>{
   if (filmPosition < filmListLength) {
        filmPosition++;
        displayFilm(filmPosition);
   }
});
