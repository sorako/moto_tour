  // var map, infobox, directionsManager, directionWaypointLayer;

  //   function GetMap()
  //   {
  //       map = new Microsoft.Maps.Map('#myMap', {});

  //       //Create a layer for managing custom waypoints.
  //       directionWaypointLayer = new Microsoft.Maps.Layer();

  //       //Add mouse events for showing instruction when hovering pins in directions waypoint layer.
  //       Microsoft.Maps.Events.addHandler(directionWaypointLayer, 'mouseover', showInstruction);
  //       Microsoft.Maps.Events.addHandler(directionWaypointLayer, 'mouseout', hideInstruction);

  //       map.layers.insert(directionWaypointLayer);

  //       //Create a reusable infobox.
  //       infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
  //           showCloseButton: false,
  //           visible: false
  //       });
  //       infobox.setMap(map);

  //       //Load the directions module.
  //       Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
  //           //Create an instance of the directions manager.
  //           directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
  //           directionsManager.setRequestOptions({
  //               routeMode: Microsoft.Maps.Directions.RouteMode.driving
  //           });

  //           //Create waypoints to route between.
  //          var Tosoh = new Microsoft.Maps.Directions.Waypoint({ address: 'モンゴルの首都ウランバートルへ向かいます',
  //       location: new Microsoft.Maps.Location(47.852887, 106.763013) });
  //       directionsManager.addWaypoint(Tosoh);

  //       var hotel = new Microsoft.Maps.Directions.Waypoint({ address: 'ホテル', 
  //       location: new Microsoft.Maps.Location(47.923970, 106.937374) });
  //       directionsManager.addWaypoint(hotel);
        
  //       var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'endes yvna', 
  //       location: new Microsoft.Maps.Location(47.907004, 106.913005) });
  //       directionsManager.addWaypoint(workWaypoint);
                
  //           //Hide all default waypoint pushpins
  //           directionsManager.setRenderOptions({
  //               firstWaypointPushpinOptions: { visible: false },
  //               lastWaypointPushpinOptions: { visible: false },
  //               waypointPushpinOptions: { visible: false }
  //           });

  //           Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', directionsUpdated);

  //           //Calculate directions.
  //           directionsManager.calculateDirections();
  //       });
  //   }

  //   function directionsUpdated(e) {
  //       directionWaypointLayer.clear();

  //       if (e.route && e.route.length > 0) {
  //           var route = e.route[0];

  //           var waypointCnt = 0;
  //           var stepCount = 0;

  //           var waypointLabel = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";

  //           var wp = [];
  //           var step;
  //           var isWaypoint;
  //           var waypointColor;
                
  //           for (var i = 0; i < route.routeLegs.length; i++) {
  //               for (var j = 0; j < route.routeLegs[i].itineraryItems.length; j++) {
  //                   stepCount++;
  //                   isWaypoint = true;

  //                   step = route.routeLegs[i].itineraryItems[j];

  //                   if (j == 0) {
  //                       if (i == 0) {
  //                           //Start Endpoint, make it green.
  //                           waypointColor = '#008f09'; 
  //                       } else {
  //                           //Midpoint Waypoint, make it gray,
  //                           waypointColor = '#737373';
  //                       }
  //                   } else if (i == route.routeLegs.length - 1 && j == route.routeLegs[i].itineraryItems.length - 1) {
  //                       //End waypoint, make it red.
  //                       waypointColor = '#d60000';                            
                            
  //                   } else {
  //                       //Instruction step
  //                       isWaypoint = false;
  //                   }

  //                   if (isWaypoint) {
  //                       pin = new Microsoft.Maps.Pushpin(step.coordinate, {
  //                           icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="49.4" viewBox="0 0 37 35" xml:space="preserve"><circle cx="32" cy="30" r="4" style="stroke-width:2;stroke:#ffffff;fill:#000000;"/><polygon style="fill:rgba(0,0,0,0.5)" points="18,1 32,30 18,18 18,1"/><rect x="2" y="2" width="15" height="15" style="stroke-width:2;stroke:#000000;fill:{color}"/><text x="9" y="13" style="font-size:11px;font-family:arial;fill:#ffffff;" text-anchor="middle">{text}</text></svg>',
  //                           anchor: new Microsoft.Maps.Point(42, 39),
  //                           color: waypointColor,
  //                           text: waypointLabel[waypointCnt]    //Give waypoints a letter as a label.
  //                       });

  //                       //Store the instruction information in the metadata.
  //                       pin.metadata = {
  //                           description: step.formattedText,
  //                           infoboxOffset: new Microsoft.Maps.Point(-30, 25)
  //                       };

  //                       waypointCnt++;
  //                   } else {
  //                       //Instruction step, make it a red circle with its instruction index.
  //                       pin = new Microsoft.Maps.Pushpin(step.coordinate, {
  //                           icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="17" viewBox="0 0 36 34" xml:space="preserve"><circle cx="16" cy="16" r="14" style="fill:{color}" /><text x="16" y="21" style="font-size:16px;font-family:arial;fill:#ffffff;" text-anchor="middle">{text}</text></svg>',
  //                           anchor: new Microsoft.Maps.Point(9, 9),
  //                           color: '#d60000',
  //                           text: stepCount + ''
  //                       });

  //                       //Store the instruction information in the metadata.
  //                       pin.metadata = {
  //                           description: step.formattedText,
  //                           infoboxOffset: new Microsoft.Maps.Point(0, 0)
  //                       };
  //                   }
                                                
  //                   wp.push(pin);
  //               }
  //           }

  //           //Reverse the order of the pins so that when rendered the last waypoints in the route are on top.
  //           wp.reverse();

  //           //Add the pins to the map. 
  //           directionWaypointLayer.add(wp);
  //       }
  //   }

  //   function showInstruction(e) {
  //       infobox.setOptions({
  //           location: e.target.getLocation(),
  //           description: e.target.metadata.description,
  //           offset: e.target.metadata.infoboxOffset,
  //           visible: true
  //       });
  //   }

  //   function hideInstruction() {
  //       infobox.setOptions({ visible: false });
  //   }
 var map;
    var directionsManager;

    function GetMap()
    {
        map = new Microsoft.Maps.Map('#myMap', {});

        //Load the directions module.
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
            //Create an instance of the directions manager.
            directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
            directionsManager.setRequestOptions({
                routeMode: Microsoft.Maps.Directions.RouteMode.driving
            });

            // Create waypoints to route between.
        var Tosoh = new Microsoft.Maps.Directions.Waypoint({ address: 'モンゴルの首都ウランバートルへ向かいます',
        location: new Microsoft.Maps.Location(47.852887, 106.763013) });
        directionsManager.addWaypoint(Tosoh);

        var hotel = new Microsoft.Maps.Directions.Waypoint({ address: 'ホテル', 
        location: new Microsoft.Maps.Location(47.923970, 106.937374) });
        directionsManager.addWaypoint(hotel);
        
        var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'endes yvna', 
        location: new Microsoft.Maps.Location(47.907004, 106.913005) });
        directionsManager.addWaypoint(workWaypoint);


            //Add event handlers to directions manager.
            Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', directionsError);
            Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', directionsUpdated);

            //Calculate directions.
            directionsManager.calculateDirections();
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

