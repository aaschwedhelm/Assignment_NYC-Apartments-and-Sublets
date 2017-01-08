var map = L.map('map').setView([40.68025, -74.00155], 13);
	
L.tileLayer('https://a.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 18,
	attribution: 'Tiles courtesy of '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
}).addTo(map);

function popUp(feature, layer) {
  layer.bindPopup(feature.properties.Neighborhood + '<br/>' + feature.properties.Start_date + '<br/>' + feature.properties.End_date);
}


//Get external geoJSON file
var geojsonLayer = new L.GeoJSON.AJAX("./js/testgeojson.json",{onEachFeature:popUp});

geojsonLayer.addTo(map);
