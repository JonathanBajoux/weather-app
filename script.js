let d = new Date();
let n = d.toLocaleDateString();
document.getElementById("date").innerHTML = n;//affiche la date local

//crée un var avec une clé que j'ai générer
let APIKEY = '41224718faf72e92aaa672d98dfa894a';


let apiCall = function (city) {//cée une fonction pour afficher l'element sur la page

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;//crée une var pour url pour lier mon API key


    fetch(url)//fait appel a l'url
        .then((response) => response.json()//donne une reponse du fichier json
            .then((data) => {
                console.log(data);


                document.querySelector('#city').innerHTML = data.city.name;//selectionne l'id html
                console.log(data.city.name);

                document.querySelector('#temp').innerHTML =//selectionne l'id html
                    data.list[0].main.temp + '°';
                console.log(data.list[0].main.temp);


                document.querySelector('#description').innerHTML =//selectionne l'id html
                    data.list[0].weather[0].description;
                console.log(data.list[0].weather[0].description);

                document.querySelector('#icon').innerHTML = //selectionne l'id html
                    data.list[0].weather[0].icon;
                console.log(data.list[0].weather[0].icon);

            })
        ).catch(err => console.log('erreur : ' + err));//affiche les erreur dans la console du navigateur

};

document.querySelector('form').addEventListener('submit', function (e) {//sélectionné la balise formulaire lui ajoute un ecouteur d'evenement
    e.preventDefault() //empeche l'evenement par default

    let ville = document.querySelector('#inputCity').value;//crée une var qui va selectionner input dand le html

    apiCall(ville);
});

apiCall('charleroi,BE');
