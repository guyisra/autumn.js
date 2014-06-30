$(document).ready(function(){


$("#map").autumn({center: [1,1]});


$("#submit").on("click", function(){
  debugger;
  var marker = JSON.parse($("#marker").val());
  $("#map").autumn('addMarker', {markers: marker});
});

$("#remove").on("click", function(){
  $("#map").autumn("deleteMarkers");
})

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
