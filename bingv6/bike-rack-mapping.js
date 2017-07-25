var map = null;

 function GetMap()
 {
    map = new VEMap('myMap');
	map.onLoadMap = AddMyLayer;
	map.LoadMap(new VELatLong(40.91435897428694, -73.12369979918003), 17, VEMapStyle.Aerial);
 }

 function AddMyLayer()
 {	
	var l = new VEShapeLayer();
	var veLayerSpec = new VEShapeSourceSpecification(VEDataType.GeoRSS, "geoInfo.xml", l);
	map.ImportShapeLayerData(veLayerSpec, onFeedLoad, true);
 }
 
 function onFeedLoad(feed)
 {
	var numShapes = feed.GetShapeCount();
	for(var i=0;i<numShapes;++i){
		var s = feed.GetShapeByIndex(i);
		s.SetCustomIcon("bike-icon.jpg");
	}
 }

 
function ZoomToCoords(x, y)
{
	map.SetCenterAndZoom(new VELatLong(x, y), 17);
}