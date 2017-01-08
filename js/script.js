var map = L.map('map').setView([40.68025, -74.00155], 13);
	
L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'

}).addTo(map);

//Get external geoJSON file
var geojsonLayer = new L.GeoJSON.AJAX("./js/testgeojson.json",{onEachFeature:popUp});

geojsonLayer.addTo(map);

function popUp(feature, layer) {
  layer.bindPopup(feature.properties.Neighborhood + '<br/>' + feature.properties.Start_date + '<br/>' + feature.properties.End_date);
}


