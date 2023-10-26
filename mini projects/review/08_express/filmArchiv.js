var filmDiv = document.getElementById('film');
var previousBtn = document.getElementById('previous');
var nextBtn = document.getElementById('next');

var currentPosisiton = 0;
var listLength;

function displayFilm(filmPosition){
    fetch('http://localhost:8080/myMovies', {
        method:'get',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    }).then(function(response){
        response.json().then(
            function(data){
                let filmsData = JSON.parse(data).filme;
                listLength = filmsData.length;
                filmDiv.innerHTML = 
                    `Titel: ${filmsData[currentPosisiton].titel}<br>
                    Erscheinungsdatum: ${filmsData[currentPosisiton].datum}<br>
                    Regie: ${filmsData[currentPosisiton].regie}<br>`;
            }
        );
    });
}

displayFilm(currentPosisiton);

previousBtn.addEventListener('click', function(){
    if (currentPosisiton > 0) {
        currentPosisiton--;
        displayFilm(currentPosisiton);
    }
    else alert("No previous film!");
});

nextBtn.addEventListener('click', function(){
    if (currentPosisiton < listLength - 1) {
        currentPosisiton++;
        displayFilm(currentPosisiton);
    }
    else alert("No next film");
});