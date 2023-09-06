// connect DOM elements
// buttons
var addFilmBtn = document.getElementById('addFilm');
var deleteFilmBtn = document.getElementById('deleteFilm');
// inputs
var titelInput = document.getElementById('filmTitelInput');
var datumInput = document.getElementById('filmDatumInput');
var regieInput = document.getElementById('filmRegieInput');

// add button
addFilmBtn.addEventListener('click', ()=>{
    // create put request
    fetch("http://localhost:8080/myMovies", {
        method:'put',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        // JSON.stringify 把js内容转化为JSON
        // body: 向server发送信息(server-side: req.body)
        body: JSON.stringify(
            { 
                titel: titelInput.value,
                datum: datumInput.value,
                regie: regieInput.value
            }
        )
    });
    // not optimal: refreash page
    location.reload();
});

// delete button
deleteFilmBtn.addEventListener('click', ()=>{
    // create delete request
    fetch("http://localhost:8080/myMovies", {
        method:'delete',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        //JSON.stringify: JavaScript->JSON
        body: JSON.stringify({
            // send titel input to server
            titel:titelInput.value
        })
    });

    // refreash 
    location.reload();
});