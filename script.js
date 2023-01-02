let city1 = document.querySelector('#city');
let temperature = document.querySelector('#temp');
let description = document.querySelector('#description');
let icon = document.querySelector('#icon');

//appel la date local
function appelDate() {
    let date1 = new Date();
    return date1.toLocaleDateString();
}
//crée un var avec une clé que j'ai générer
let APIKEY = '41224718faf72e92aaa672d98dfa894a';

let apiCall = function (city) {//cée une fonction pour afficher l'element sur la page

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;//crée une var pour url pour lier mon API key

    fetch(url)//fait appel a l'url
        .then((response) => response.json()//donne une reponse du fichier json
            .then((data) => {

                city1.innerHTML = data.city.name;//selectionne l'id html

                temperature.innerHTML = data.list[0].main.temp + '°';//selectionne l'id html

                description.innerHTML = data.list[0].weather[0].description;//selectionne l'id html

                icon.innerHTML = data.list[0].weather[0].icon;//selectionne l'id html

                let date = appelDate();
                document.getElementById("date").innerHTML = date;

            })
        ).catch(err => console.log('erreur : ' + err));//affiche les erreur dans la console du navigateur

};

document.querySelector('form').addEventListener('submit', function (e) {//sélectionné la balise formulaire lui ajoute un ecouteur d'evenement
    e.preventDefault() //empeche l'evenement par default

    let ville = document.querySelector('#inputCity').value;//crée une var qui va selectionner input dand le html

    apiCall(ville);
});

apiCall('charleroi,BE');
