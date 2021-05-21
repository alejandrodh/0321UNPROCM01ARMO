// console.log('Hola');

let usuario = {
    name: 'Maca',
    email: 'maca@dh.com',
    pass: 'kjhgyuihg654567865'
}

let json = JSON.stringify(usuario);
// console.log(json)
let aObjetoLiteral = JSON.parse(json);
// console.log(aObjetoLiteral)


//Fetch
let url = 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre'; //End Point

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then( function(data){
        // Acá escribimos nuestro código
        let provincias = data.provincias;
        // console.log(provincias);
        let lista = document.querySelector('.lista');

        for(let i=0; i<provincias.length; i++){
            lista.innerHTML += `<li>${provincias[i].nombre}</li>`
        }
    })
    .catch( function(error){
        console.log(error);
    })


    //fetch con un solo dato.
    let urlUser = 'https://randomuser.me/api/';

    fetch(urlUser)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // Acá nuestro código
            let usuario = data.results[0];
            // console.log(data);
            //Capturamos los destinos
            let avatar = document.querySelector('.avatar');
            let name = document.querySelector('.name');
            let email = document.querySelector('.email');

            avatar.src = usuario.picture.medium;
            name.innerHTML += `${usuario.name.title}. ${usuario.name.first} ${usuario.name.last}`
            email.innerHTML += usuario.email;


        })
        .catch( function(error){
        console.log(error);
    })  


  function gifRandom(){
      //Gif random
    let urlGifRandom = 'https://api.giphy.com/v1/gifs/random?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&tag=&rating=g'
    
    fetch(urlGifRandom)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // console.log(data);
            let gif = document.querySelector('.gifRandom');
            let urlGif = data.data.images.original.url

            gif.src = urlGif;
        })
        .catch( function(error){
        console.log(error);
    })
  }


let button = document.querySelector('.newGif');
button.addEventListener('click', function(e){
    e.preventDefault();
    //Traer un nuvo gif;
    gifRandom();
})

let title = document.querySelector('.gifTitle');
title.addEventListener('dblclick', function(e){
    gifRandom();
})