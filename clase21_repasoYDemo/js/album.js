let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let album = `https://api.deezer.com/album/${id}`;
let url = proxy + album;


fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data);
        //Nos quedamos solo con el array de datos
        let image = document.querySelector('img');
        let title = document.querySelector('.title');
        let artist = document.querySelector('.artist');

        image.src = data.cover_medium;
        title.innerText = data.title;
        artist.innerText = data.artist.name

    })
    .catch( e => { console.log(e) })

