const APIKey = "480c3f4a5b060a6635e335b60a2eb132";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You Live it", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&unit=metric`
    fetch(url).then(reponse => reponse.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child")
        const weather = data.weather[0].main;
        weatherContainer.innerText = weather+",";

        const nameContainer = document.querySelector("#weather span:last-child")
        const name = data.name;
        nameContainer.innerText = `@ ${name}`;
    });
}
function onGeoError(){
    // alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);