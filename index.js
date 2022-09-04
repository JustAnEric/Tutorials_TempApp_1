var prompt = document.querySelector('promt');
var tempField = document.querySelector('tempfield');

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

getLocation = function(loc) {
    const crd = loc.coords;
    const longt = crd.longitude;
    const latit = crd.latitude;
    var resp = fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latit}&lon=${longt}&appid=ecd470505889fc70175bce7a20ecaa66`
    )
    resp.then(function(response) {
        response.json['']
    })
}

errorOnGetLocation = function(error) { alert(error+": Couldn't get location") }

var requestLocation = navigator.geolocation.getCurrentPosition(getLocation, errorOnGetLocation)