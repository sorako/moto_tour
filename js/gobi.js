var map;
var directionsManager;

function GetMap()
{
    map = new Microsoft.Maps.Map('#myMap', {});

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        //Create waypoints to route between.
        var seattleWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'endes tosoj avna, UB',location: new Microsoft.Maps.Location(47.852887, 106.763013) });
        directionsManager.addWaypoint(seattleWaypoint);

        var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'end buulgana', location: new Microsoft.Maps.Location(47.923970, 106.937374) });
        directionsManager.addWaypoint(workWaypoint);
        
         var workWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: 'end buulgana', location: new Microsoft.Maps.Location(47.907004, 106.913005) });
        directionsManager.addWaypoint(workWaypoint);

        //Specify the element in which the itinerary will be rendered.
        directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });

        //Calculate directions.
        directionsManager.calculateDirections();
    });
}
