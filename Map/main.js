const apiKey = 'pk.eyJ1IjoibnBvdG5pcyIsImEiOiJjbDZlYXE4czYwMXgzM2RzZW4zNHN1ZmN2In0.KTaxaPA7s3G4NRRXfm7pUQ';

const mymap = L.map('map').setView([40.770116, -73.967909], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

//Adding marker

const marker = L.marker([40.7812, -73.9665]).addTo(mymap);

//Add popup message
let template = `

<h1>Broken Bench</h1>
<image width="300" height="158" src="BrokenBench.jpg"/>

`


marker.bindPopup(template);