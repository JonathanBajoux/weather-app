export function createWeatherCard(date, degrees, condition, icons) {
    let wkCard = document.createElement("div");
    wkCard.classList.add("cardDiv");
    let wkDegrees = document.createElement("h3");
    let wkDate = document.createElement("h4");
    let wkCondi = document.createElement("h5");
    let wkIcon = document.createElement("img");

    wkDegrees.innerText = `${degrees} °C`;
    wkDate.innerText = date;
    wkCondi.innerText = condition;
    wkIcon.src = icons;

    wkCard.appendChild(wkDate);
    wkCard.appendChild(wkDegrees);
    wkCard.appendChild(wkCondi)
    wkCard.appendChild(wkIcon);

    return wkCard;
}