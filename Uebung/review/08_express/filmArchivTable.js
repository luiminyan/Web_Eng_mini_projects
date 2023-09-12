// connect DOM element
var showBtn = document.getElementById('allFilms');
var filmTable = document.getElementById('filmTable');

showBtn.addEventListener('click', function(){
    // create request bt fetch
    fetch('http://localhost:8080/myMovies', {
        method:'get',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        response.json().then(function(data){
            // 先parse response的data
            let filmContent = JSON.parse(data);
            showFilmTable(filmContent.filme);
        });
    });
});

const showFilmTable = function(filmContent){
    let tableContent = 
        `<tr>
            <th>Titel</th>
            <th>Erscheinungsdatum</th>
            <th>Regie</th>
        </tr>`;
    for (i=0; i<filmContent.length; i++) {
        tableContent += 
            `<tr>
                <td>${filmContent[i].titel}</td>
                <td>${filmContent[i].datum}</td>
                <td>${filmContent[i].regie}</td>
            </tr>`;
    }
    filmTable.innerHTML = tableContent;
}