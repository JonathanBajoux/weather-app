import { appelDate } from './module/date.js'; // import
import { APP } from './model/app.js';
import {createWeatherCard} from './module/createCard.js';

let city1 = document.querySelector('#city'); // crée un seul variable pour selectionner tout les elements dans un tableau
let temperature = document.querySelector('#temp');
let description = document.querySelector('#description');
let icon = document.querySelector('#icon');

//let APIKEY = '41224718faf72e92aaa672d98dfa894a'; //crée un var avec une clé que j'ai générer

let apiCall = function (city) { //crée une fonction pour lier  a l'api

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APP.APIKEY.openWeatherKey}&units=metric&lang=fr`; //crée une var pour url pour lier mon API key

    let date = appelDate();//appel la fonction de la date local
    document.getElementById("date").innerHTML = date; //permet d'accéder a l'element id de la page html

    fetch(url) //fait appel a l'url
        .then((response) => response.json() //donne une reponse du fichier json
            .then((data) => {
                console.log(data);

                let liste = data.list[0];
                city1.innerHTML = data.city.name; //affiche l'id html
                temperature.innerHTML = liste.main.temp + '°'; //affiche l'id html
                description.innerHTML = liste.weather[0].description; //affiche l'id html
                icon.src = `http://openweathermap.org/img/wn/${liste.weather[0].icon}@2x.png`; //affiche l'id html

                let arrDay = [8, 16, 24, 32, 39];
                for (let elem of arrDay) {
                    let date = data.list[elem].dt_txt.split(" ")[0];
                    let degrees = data.list[elem].main.temp;
                    let condition = data.list[elem].weather[0].main;
                    let icons = `http://openweathermap.org/img/wn/${data.list[elem].weather[0].icon}@2x.png`;

                    let wkCard = createWeatherCard(date, degrees, condition, icons);
                    main.appendChild(wkCard);
                }
                
            })
        ).catch(err => console.log('erreur : ' + err)); //affiche les erreur dans la console du navigateur

};

document.querySelector('form').addEventListener('submit', function (e) { //sélectionné la balise formulaire lui ajoute un ecouteur d'evenement
    e.preventDefault() //empeche l'evenement par default

    let ville = document.querySelector('#inputCity').value; //crée une variable qui va selectionner input dand le html

    apiCall(ville);
});

apiCall('charleroi,BE');
