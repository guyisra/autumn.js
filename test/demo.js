$(document).ready(function(){


$("#map").autumn({center: [1,1], maxZoom: 18, tiles_url: "http://{s}.tiles.mapbox.com/v3/guyisra.ibee8f32/{z}/{x}/{y}.png"});


$("#submit").on("click", function(){
  var marker = JSON.parse($("#marker").val());
  $("#map").autumn('addMarker', {marker: marker});
});

$("#remove").on("click", function(){
  $("#map").autumn("deleteMarkers");
});

$("#random").on("click", function(){
  var markers = [];
  var count = Math.floor(randomCoor(2, 10));
  for ( var i = 0; i < count; i++) {
    var coor = [randomCoor(-30, 30), randomCoor(-20,20)];
    markers.push(coor);
  }
  $("#map").autumn("deleteMarkers");
  $("#map").autumn('addMarkers', {markers: markers});
  $("#map").autumn('fitMarkers');
});

function randomCoor(min,max){
    return Math.random() * (max - min) + min;
}
$("#map").autumn_map().on("click", function(e){
  debugger;
  var ll = e.latlng;
  $("#map").autumn('addMarker', {markers: [ll.lat,ll.lng]});
});

$(".leaflet-marker-pane").on("click", function(e){
  e.stopPropagation();
  debugger;
});

});
