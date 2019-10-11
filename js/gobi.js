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
        var Tosoh = new Microsoft.Maps.Directions.Waypoint({ address: 'チンギスハーン国際空港',
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

