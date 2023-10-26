var titelInput = document.getElementById('filmTitelInput');
var datumInput = document.getElementById('filmDatumInput');
var regieInput = document.getElementById('filmRegieInput');
var addBtn = document.getElementById('addFilm');
var deleteBtn = document.getElementById('deleteFilm');

addBtn.addEventListener('click', function(){
    fetch('http://localhost:8080/myMovies', {
        method: 'put',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titel: titelInput.value,
            datum: datumInput.value,
            regie: regieInput.value
        })
    });
});

deleteBtn.addEventListener('click', function(){
    fetch('http://localhost:8080/myMovies', {
        method:'delete',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            titel: titelInput.value,
            datum: datumInput.value,
            regie: regieInput.value
        })
    });
});