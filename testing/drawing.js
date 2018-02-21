//execute after everything has loaded.

function getRandomColor() {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {
      'lat': 33.749,
      'lng': -84.388
    },
    mapTypeId: 'terrain'
  });
  for (i in shapes) {
    //process coordinates
    for (j in shapes[i]['coordinates']) {
      for (k in shapes[i]['coordinates'][j]) {
        shapes[i]['coordinates'][j][k] = new google.maps.LatLng(
          shapes[i]['coordinates'][j][k]['lat'],
          shapes[i]['coordinates'][j][k]['lng']);
      }
      shapes[i]['coordinates'][j] = new google.maps.MVCArray(shapes[i]['coordinates'][j]);
    }
    var coors = new google.maps.MVCArray(shapes[i]['coordinates'])
    var rndcolor = getRandomColor()
    var path = new google.maps.Polygon({
      paths: coors,
      strokeColor: rndcolor,
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: rndcolor,
      flilOpacity: 0.35
    });
    path.setMap(map);
  }
}
