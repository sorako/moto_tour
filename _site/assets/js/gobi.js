var map = null, infobox, dataLayer;
    var directionsManager;

function GetMap()
{
    map = new Microsoft.Maps.Map('#myMap', {});

        var loc1 = new Microsoft.Maps.Location(47.845263, 106.789952);
        var loc2 = new Microsoft.Maps.Location(43.604722, 104.370552);
   

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
        directionsManager.setRequestOptions({
            routeMode: Microsoft.Maps.Directions.RouteMode.driving
        });

        var center = map.getCenter();

        // Create waypoints to route between.
    var Tosoh = new Microsoft.Maps.Directions.Waypoint({ address:  "チンギスハーン国際空港",
    location: new Microsoft.Maps.Location(47.852887, 106.763013) }); 
    directionsManager.addWaypoint(Tosoh );

    var hotel = new Microsoft.Maps.Directions.Waypoint({ address: 'ホテル', 
    location: new Microsoft.Maps.Location(47.923970, 106.937374) });
    directionsManager.addWaypoint(hotel);
    
    var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'ウランバートル⇨モンゴルの東部ドルノド県チョイバルサン', 
    location: new Microsoft.Maps.Location(47.845263, 106.789952) });
    directionsManager.addWaypoint(workWaypoint);



    dataLayer = new Microsoft.Maps.EntityCollection();
    map.entities.push(dataLayer);

    var infoboxLayer = new Microsoft.Maps.EntityCollection();
    map.entities.push(infoboxLayer);

    infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false, offset: new Microsoft.Maps.Point(0, 20) });
    infoboxLayer.push(infobox);

    AddData();
    directionsManager.setRenderOptions({
        itineraryContainer: document.getElementById('directionsItinerary'),
        waypointPushpinOptions:{visible:false},
        viapointPushpinOptions:{visible:false},
    });

    //Add event handlers to directions manager.
    Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', directionsError);
    Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', directionsUpdated);

    //Calculate directions.
    directionsManager.calculateDirections();

     // Add a pin to the map
    var pin1 = new Microsoft.Maps.Pushpin(loc1,{
        icon: 'assets/images/map_icons/airplane.png'
        });
    var pin2 = new Microsoft.Maps.Pushpin(loc2,{
        icon: 'assets/images/map_icons/airplane.png'
        });
 
    // Create a polyline
    var lineVertices = new Array(loc1, loc2);
    var line = new Microsoft.Maps.Polyline(lineVertices,{ strokeColor: 'blue', strokeThickness: 5 });

    map.entities.push(line);
    map.entities.push(pin1);
    map.entities.push(pin2);    

    });
}

function directionsUpdated(e) {
    //Get the current route index.
    var routeIdx = directionsManager.getRequestOptions().routeIndex;
    //Get the distance of the route, rounded to 2 decimal places.
    var distance = Math.round(e.routeSummary[routeIdx].distance * 100)/100;
    //Get the distance units used to calculate the route.
    var units = directionsManager.getRequestOptions().distanceUnit;
    var distanceUnits = '';
    if (units == Microsoft.Maps.Directions.DistanceUnit.km) {
        distanceUnits = 'km'
    } else {
        //Must be in miles
        distanceUnits = 'miles'
    }
    //Time is in seconds, convert to minutes and round off.
    var time = Math.round(e.routeSummary[routeIdx].timeWithTraffic / 60);
    document.getElementById('routeInfoPanel').innerHTML = '距離: ' + distance + ' ' + distanceUnits + '<br/>交通のある時間: ' + time + ' minutes';
}

function directionsError(e) {
    alert('Error: ' + e.message + '\r\nResponse Code: ' + e.responseCode)
}

function AddData() {
  var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(47.852887, 106.763013),{
        icon: 'assets/images/map_icons/start.png',
        title: 'start'
        });
  pin1.Title =  "チンギスハーン国際空港に到着後";
  pin1.Description = "ホテルへご案内";


  Microsoft.Maps.Events.addHandler(pin1, 'click', displayInfobox);
  dataLayer.push(pin1);

  var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(47.923970, 106.937374),{
        icon: 'assets/images/map_icons/hotel.png',
        title: 'ホテル'
        });
  pin2.Title = 'ホテル';
  pin2.Description = "チェックイン後に夕食。明日からのツアーの説明ミーティング。";
  Microsoft.Maps.Events.addHandler(pin2, 'click', displayInfobox);
  dataLayer.push(pin2);

  var pin3 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(47.845263, 106.789952),{
        icon: 'assets/images/map_icons/airplane.png',
        title: 'チンギスハーン国際空港'
        });
  pin3.Title = "ウランバートル⇨モンゴルの東部ドルノド県チョイバルサン市まで✈️で1.5時間";
  pin3.Description = "ダランザドガド市⇨バヤンザグ（砂漠の林という意味）まで１６０キロ⇨モルツォグ砂丘まで４０キロオフロードバイクツーリング。";
  Microsoft.Maps.Events.addHandler(pin3, 'click', displayInfobox);
  dataLayer.push(pin3);

  var pin4 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(43.604722, 104.370552),{
        icon: 'assets/images/map_icons/airplane.png',
        title: 'チンギスハーン国際空港'
        });
  pin4.Title = "ダランザドガド市⇨バヤンザグ";
  pin4.Description = "砂漠の林という意味）まで１６０キロ⇨モルツォグ砂丘まで４０キロオフロードバイクツーリング。";
  Microsoft.Maps.Events.addHandler(pin4, 'click', displayInfobox);
  dataLayer.push(pin4);

}

function displayInfobox(e) {
  if (e.targetType == 'pushpin') {
      infobox.setLocation(e.target.getLocation());
      infobox.setOptions({ visible: true, title: e.target.Title, description: e.target.Description });
  }
}  



