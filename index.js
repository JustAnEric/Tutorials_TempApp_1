var prompt = document.querySelector('promt');
var tempField = document.querySelector('0');
var requestLocation = Geolocation.getCurrentPosition(getLocation, errorOnGetLocation)

getLocation = function(loc) {

}

errorOnGetLocation = function(error) { alert(error+": Couldn't get location") }