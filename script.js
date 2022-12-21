//crée un var avec ma clé que j'ai générer
let APIKEY = '41224718faf72e92aaa672d98dfa894a';


let apiCall = function (city) {
    //crée une var pour url pour lier mon API key
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    //fait appel a l'url
    fetch(url)
        .then((response) => response.json()
            .then((data) => {
                console.log(data);

                document.querySelector('#city').innerHTML = data.city.name;
                console.log(data.city.name);
                
                document.querySelector('#temp').innerHTML =
                    "<i class='fa-solid fa-temperature-empty'></i>" + data.list[1].main.temp + '°';
                console.log(data.list[1].main.temp);

                document.querySelector('#humidity').innerHTML =
                    "<i class='fa-solid fa-droplet-degree'></i>" + data.list[1].main.humidity + '%';
                console.log(data.list[1].main.humidity);

                document.querySelector('#wind').innerHTML =
                    "<i class='fa-thin fa-wind'></i>" + data.list[1].wind.speed + 'km/h';
                console.log(data.list[1].wind.speed);
            })
        ).catch(err => console.log('erreur : ' + err));
};
//sélectionné la balise formulaire lui ajoute un click
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    //crée une var qui va selectionner input dand le html
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

apiCall('charleroi,BE');
//for (data = 0; data < 5; data++);