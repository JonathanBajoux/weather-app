//selectionne les element de l'html
let city1 = document.querySelector('#city');
let temperature = document.querySelector('#temp');
let description = document.querySelector('#description');
let icon = document.querySelector('#icon');

function appelDate() {//crée un fonction pour la date local
    let date1 = new Date();
    return date1.toLocaleDateString();
}

let APIKEY = '41224718faf72e92aaa672d98dfa894a'; //crée un var avec une clé que j'ai générer

let apiCall = function (city) { //crée une fonction pour lier  a l'api

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric&lang=fr`; //crée une var pour url pour lier mon API key

    fetch(url) //fait appel a l'url
        .then((response) => response.json() //donne une reponse du fichier json
            .then((data) => {
                console.log(data);

                city1.innerHTML = data.city.name; //affiche l'id html
                temperature.innerHTML = data.list[0].main.temp + '°'; //affiche l'id html
                description.innerHTML = data.list[0].weather[0].description; //affiche l'id html
                icon.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`; //affiche l'id html

                let date = appelDate();//appel la fonction de la date local
                document.getElementById("date").innerHTML = date; //permet d'accéder a l'element id de la page html

            })
        ).catch(err => console.log('erreur : ' + err)); //affiche les erreur dans la console du navigateur

};

document.querySelector('form').addEventListener('submit', function (e) { //sélectionné la balise formulaire lui ajoute un ecouteur d'evenement
    e.preventDefault() //empeche l'evenement par default

    let ville = document.querySelector('#inputCity').value; //crée une variable qui va selectionner input dand le html

    apiCall(ville);
});

apiCall('charleroi,BE');
