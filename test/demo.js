$(document).ready(function(){


$("#map").autumn({center: [1,1], maxZoom: 18});


$("#submit").on("click", function(){
  debugger;
  var marker = JSON.parse($("#marker").val());
  $("#map").autumn('addMarker', {markers: marker});
});

$("#remove").on("click", function(){
  $("#map").autumn("deleteMarkers");
});

$("#random").on("click", function(){
  var markers = [];
  var count = Math.floor(randomCoor(2, 100));
  for ( var i = 0; i < count; i++) {
    var coor = [randomCoor(-90, 90), randomCoor(-90,90)];
    markers.push(coor);
  }
  $("#map").autumn("deleteMarkers");
  $("#map").autumn('addMarker', {markers: markers});
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
