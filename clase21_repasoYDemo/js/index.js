//Top albums

let proxy = 'https://cors-anywhere.herokuapp.com/';
let albums = 'https://api.deezer.com/chart/0/albums';
let url = proxy + albums;

fetch(url)
    .then( function(response){
        return response.json();
    })
    .then( function(data){
        console.log(data);
        //Nos quedamos solo con el array de datos
        let info = data.data 
        // Obtenermos contendor
        let albumsContainer = document.querySelector('.albums');
        //Definimos variable para poner el contenido
        let albums = '';

        //Bucle para recorrer los datos
        for(let i=0; i<info.length; i++){
            albums += ` <article>
                            <img src="${info[i].cover_medium}" alt="">
                            <p>Nombre: ${info[i].title} </p>
                            <p>tipo: ${info[i].type}</p>
                            <p>artista:${info[i].artist.name}</p>
                            <a href="album.html?id=${info[i].id}"> Ver más</a>
                        </article>`
        }

        albumsContainer.innerHTML += albums;


    })
    .catch( e => { console.log(e) })