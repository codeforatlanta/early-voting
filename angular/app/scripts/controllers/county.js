'use strict';

/**
 * @ngdoc function
 * @name earlyVotingApp.controller:CountyCtrl
 * @description
 * # CountyCtrl
 * Controller of the earlyVotingApp
 */
angular.module('earlyVotingApp')
  .controller('CountyCtrl', ['$scope', '$http', '$routeParams', 'countyElectionInfo', 'leafletBoundsHelpers', 
  									function ($scope,   $http,   $routeParams,   countyElectionInfo,   leafletBoundsHelpers) {
  	function toTitleCase(str) {
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}
    this.county = toTitleCase($routeParams.countyName);
    var county = this.county;
    var counties = {"Wayne": [ -82.147948, 31.327101, -81.61201, 31.829308 ],"Paulding": [ -85.05031, 33.774758, -84.723236, 34.082609 ],"Rabun": [ -83.661672, 34.716007, -83.098244, 35.000659 ],"Floyd": [ -85.462207, 34.079133, -85.005235, 34.587483 ],"Cherokee": [ -84.659239, 34.073298, -84.257586, 34.41259 ],"Marion": [ -84.658983, 32.134058, -84.389927, 32.562083 ],"Burke": [ -82.316515, 32.803707, -81.541831, 33.297001 ],"Dawson": [ -84.34655, 34.334011, -83.957077, 34.617924 ],"Madison": [ -83.402428, 33.998935, -82.976294, 34.27348 ],"Bulloch": [ -82.030233, 32.15289, -81.433044, 32.653433 ],"Gilmer": [ -84.657098, 34.548495, -84.193481, 34.85556 ],"Effingham": [ -81.548006, 32.095886, -81.119496, 32.595416 ],"Berrien": [ -83.43901, 31.025405, -83.033468, 31.476045 ],"Bleckley": [ -83.498089, 32.272489, -83.138991, 32.584201 ],"Brooks": [ -83.743729, 30.634406, -83.308891, 31.078958 ],"Catoosa": [ -85.265114, 34.767639, -84.979661, 34.987647 ],"Charlton": [ -82.421097, 30.355757, -81.891878, 31.075467 ],"Crawford": [ -84.202628, 32.529695, -83.70109, 32.857137 ],"Dade": [ -85.605165, 34.623858, -85.363919, 34.984678 ],"Decatur": [ -84.871322, 30.689993, -84.375929, 31.079544 ],"DeKalb": [ -84.350224, 33.614666, -84.023713, 33.970911 ],"Echols": [ -83.13662, 30.591548, -82.578692, 30.872249 ],"Fayette": [ -84.62722, 33.2565, -84.38163, 33.550933 ],"Forsyth": [ -84.258987, 34.050565, -83.925529, 34.335171 ],"Fulton": [ -84.850713, 33.502412, -84.097692, 34.186289 ],"Cook": [ -83.577053, 31.027275, -83.279728, 31.350361 ],"Grady": [ -84.380705, 30.675804, -84.07291, 31.078949 ],"Lanier": [ -83.197995, 30.844709, -82.969659, 31.184208 ],"Morgan": [ -83.687401, 33.434472, -83.269134, 33.817829 ],"Rockdale": [ -84.184143, 33.525776, -83.91323, 33.786054 ],"Whitfield": [ -85.168851, 34.615719, -84.810699, 34.988243 ],"Gwinnett": [ -84.276822, 33.752808, -83.799104, 34.167873 ],"Lowndes": [ -83.484766, 30.623967, -83.019419, 31.031964 ],"Newton": [ -84.055221, 33.367241, -83.674644, 33.744203 ],"Oconee": [ -83.647031, 33.698327, -83.275933, 33.965912 ],"Seminole": [ -85.028573, 30.711493, -84.730855, 31.075564 ],"Bartow": [ -85.047074, 34.075296, -84.644293, 34.413061 ],"Polk": [ -85.421852, 33.899212, -84.922742, 34.100668 ],"Pickens": [ -84.654366, 34.373266, -84.256867, 34.563681 ],"Cobb": [ -84.739636, 33.743507, -84.374728, 34.081433 ],"Monroe": [ -84.124275, 32.848337, -83.705917, 33.202634 ],"Bacon": [ -82.628273, 31.416906, -82.226585, 31.710796 ],"Clarke": [ -83.537385, 33.847977, -83.24086, 34.040572 ],"Johnson": [ -82.957066, 32.509473, -82.434149, 32.822356 ],"Talbot": [ -84.703377, 32.518639, -84.286516, 32.883595 ],"Emanuel": [ -82.647733, 32.291882, -82.001236, 32.84133 ],"Heard": [ -85.293805, 33.129559, -84.939015, 33.428106 ],"Jackson": [ -83.817602, 33.965912, -83.357051, 34.295276 ],"Houston": [ -83.856851, 32.282583, -83.482459, 32.692169 ],"Laurens": [ -83.226536, 32.147274, -82.633126, 32.71576 ],"Pulaski": [ -83.615846, 32.102843, -83.291106, 32.402358 ],"Taliaferro": [ -83.014038, 33.438099, -82.679975, 33.733333 ],"Troup": [ -85.236518, 32.866647, -84.86147, 33.224693 ],"Union": [ -84.179047, 34.64082, -83.780401, 34.987545 ],"Walker": [ -85.534089, 34.581799, -85.050446, 34.985175 ],"Butts": [ -84.123767, 33.18022, -83.807265, 33.444667 ],"Clay": [ -85.14113, 31.485871, -84.799134, 31.780463 ],"Jones": [ -83.816856, 32.841291, -83.357685, 33.185837 ],"Glynn": [ -81.782493, 30.990644, -81.182564, 31.453021 ],"Lincoln": [ -82.645606, 33.636979, -82.218649, 33.984195 ],"Meriwether": [ -84.864633, 32.84464, -84.490539, 33.231493 ],"Murray": [ -84.944512, 34.583187, -84.582195, 34.988329 ],"Putnam": [ -83.545876, 33.167491, -83.143428, 33.483447 ],"Randolph": [ -84.959324, 31.618643, -84.535096, 31.93184 ],"Screven": [ -81.868683, 32.489286, -81.389205, 33.045654 ],"Richmond": [ -82.353498, 33.227165, -81.828336, 33.544934 ],"Stewart": [ -85.06833, 31.920308, -84.63112, 32.232953 ],"Sumter": [ -84.443807, 31.872756, -83.919119, 32.229703 ],"Thomas": [ -84.119245, 30.658396, -83.736158, 31.077971 ],"Hall": [ -84.062841, 34.098281, -83.61529, 34.514096 ],"Jasper": [ -83.863362, 33.131816, -83.533736, 33.52622 ],"Long": [ -81.981621, 31.538667, -81.491798, 32.014882 ],"Telfair": [ -83.207583, 31.774629, -82.645581, 32.153274 ],"Carroll": [ -85.33823, 33.425506, -84.808934, 33.812429 ],"Walton": [ -83.982201, 33.596919, -83.505902, 33.929844 ],"Wheeler": [ -82.940242, 31.918883, -82.539184, 32.310324 ],"White": [ -83.877418, 34.503598, -83.615517, 34.801374 ],"Upson": [ -84.534397, 32.690018, -84.122246, 33.00415 ],"Stephens": [ -83.45977, 34.461135, -83.103451, 34.687187 ],"Spalding": [ -84.509104, 33.17862, -84.088991, 33.352621 ],"Tift": [ -83.66667, 31.326263, -83.338728, 31.597921 ],"Ware": [ -82.70105, 30.568481, -82.131698, 31.469381 ],"Wilkes": [ -82.987286, 33.596071, -82.479518, 33.991402 ],"Turner": [ -83.802223, 31.565492, -83.452179, 31.854095 ],"Worth": [ -84.03288, 31.318365, -83.649384, 31.849588 ],"Barrow": [ -83.869115, 33.894573, -83.537385, 34.127518 ],"Gordon": [ -85.112327, 34.38419, -84.644432, 34.634128 ],"Chattooga": [ -85.527261, 34.286097, -85.107748, 34.589333 ],"Treutlen": [ -82.748742, 32.293595, -82.38194, 32.512507 ],"Appling": [ -82.550714, 31.469324, -82.048582, 31.966182 ],"Atkinson": [ -83.141586, 31.183012, -82.62896, 31.420395 ],"Columbia": [ -82.442846, 33.354635, -82.028238, 33.700644 ],"Glascock": [ -82.755846, 33.118881, -82.431957, 33.32727 ],"Greene": [ -83.406196, 33.35503, -82.950723, 33.761774 ],"Liberty": [ -81.824405, 31.520981, -81.049789, 32.092551 ],"Mitchell": [ -84.508324, 31.077148, -83.997784, 31.443753 ],"Quitman": [ -85.141931, 31.770963, -84.907006, 31.991857 ],"Terrell": [ -84.603086, 31.620988, -84.258284, 31.967456 ],"Toombs": [ -82.483131, 31.911798, -82.181912, 32.35383 ],"Dooly": [ -84.033411, 32.027938, -83.606113, 32.292175 ],"Harris": [ -85.184914, 32.583129, -84.682876, 32.872496 ],"Fannin": [ -84.622752, 34.602958, -84.092589, 34.989639 ],"Macon": [ -84.255912, 32.170774, -83.836673, 32.530602 ],"Camden": [ -81.936988, 30.708651, -81.304353, 31.169595 ],"Baker": [ -84.641953, 31.078396, -84.140852, 31.454761 ],"Twiggs": [ -83.611569, 32.452198, -83.226536, 32.89822 ],"Chattahoochee": [ -85.008096, 32.220951, -84.637323, 32.534956 ],"Baldwin": [ -83.42909, 32.926141, -83.044327, 33.1904 ],"Banks": [ -83.66967, 34.197499, -83.337849, 34.491734 ],"Ben Hill": [ -83.484529, 31.651691, -82.995666, 31.851987 ],"Brantley": [ -82.286137, 31.010441, -81.731694, 31.373721 ],"Bryan": [ -81.781712, 31.71266, -81.138324, 32.24131 ],"Candler": [ -82.254572, 32.268783, -81.918652, 32.560063 ],"Clinch": [ -82.971336, 30.581767, -82.418632, 31.184154 ],"Chatham": [ -81.391698, 31.705198, -80.751429, 32.237591 ],"Colquitt": [ -84.013858, 31.025846, -83.505386, 31.33498 ],"Dougherty": [ -84.457662, 31.435856, -83.981606, 31.650274 ],"Evans": [ -82.025339, 32.0479, -81.718658, 32.278883 ],"Habersham": [ -83.681696, 34.4317, -83.338173, 34.827736 ],"Henry": [ -84.3544, 33.297631, -83.9225, 33.647411 ],"Irwin": [ -83.500952, 31.471857, -82.99836, 31.769659 ],"Jeff Davis": [ -82.839122, 31.671281, -82.430452, 31.971689 ],"Lamar": [ -84.27014, 32.931497, -84.040914, 33.202824 ],"Lee": [ -84.338611, 31.621951, -83.922494, 31.91619 ],"Lumpkin": [ -84.19104, 34.418674, -83.831618, 34.740944 ],"McDuffie": [ -82.6488, 33.310879, -82.294179, 33.659994 ],"Montgomery": [ -82.656244, 31.948572, -82.409118, 32.353848 ],"Oglethorpe": [ -83.306619, 33.689869, -82.779506, 34.047638 ],"Muscogee": [ -85.080784, 32.373874, -84.667463, 32.608137 ],"Pike": [ -84.538004, 32.968534, -84.24766, 33.208889 ],"Towns": [ -83.946068, 34.79052, -83.546883, 34.992492 ],"Pierce": [ -82.417435, 31.202082, -81.992114, 31.530699 ],"Warren": [ -82.866605, 33.25344, -82.383829, 33.611437 ],"Wilcox": [ -83.612256, 31.844626, -83.176693, 32.133432 ],"Elbert": [ -83.103287, 33.955728, -82.564462, 34.289489 ],"Calhoun": [ -84.828062, 31.427882, -84.412521, 31.64367 ],"Early": [ -85.114601, 31.07259, -84.627579, 31.51867 ],"Jenkins": [ -82.147942, 32.60691, -81.767543, 32.953882 ],"Franklin": [ -83.398529, 34.223753, -83.05138, 34.536617 ],"Hart": [ -83.115847, 34.209708, -82.774094, 34.493761 ],"Miller": [ -84.922423, 31.06801, -84.537101, 31.259469 ],"Schley": [ -84.430215, 32.158493, -84.181657, 32.428095 ],"Taylor": [ -84.453232, 32.372053, -84.001971, 32.749464 ],"Webster": [ -84.65582, 31.919167, -84.431214, 32.233103 ],"Washington": [ -83.073648, 32.756261, -82.510851, 33.238428 ],"Bibb": [ -83.893037, 32.660643, -83.48943, 32.952792 ],"Clayton": [ -84.458927, 33.352465, -84.243858, 33.648876 ],"Coffee": [ -83.151141, 31.363884, -82.596283, 31.812511 ],"Coweta": [ -85.015358, 33.191043, -84.497043, 33.511758 ],"Crisp": [ -83.961278, 31.803495, -83.609514, 32.030602 ],"Dodge": [ -83.373931, 31.900325, -82.87179, 32.452533 ],"Douglas": [ -84.911059, 33.5733, -84.578132, 33.806264 ],"Hancock": [ -83.27522, 33.049849, -82.746182, 33.469178 ],"Haralson": [ -85.386581, 33.652087, -85.036684, 33.906302 ],"Jefferson": [ -82.662135, 32.761452, -82.232554, 33.313299 ],"McIntosh": [ -81.668357, 31.290953, -81.095383, 31.699575 ],"Peach": [ -84.018168, 32.439123, -83.70101, 32.692815 ],"Tattnall": [ -82.235034, 31.782607, -81.761735, 32.318859 ],"Wilkinson": [ -83.40699, 32.584201, -82.945098, 33.008791 ]};
    var countyBbox = counties[this.county];
    this.bounds = leafletBoundsHelpers.createBoundsFromArray([
    	[ countyBbox[1], countyBbox[0] ],
    	[ countyBbox[3], countyBbox[2] ]
  	]);
  	// get bbox from geojson instead of above dictionary
  	var fileName = 'data/county-outlines/' + this.county + '.geojson';
  	var pollingPlaceIndex = 0;

	  var pollingIcon = {
	  	iconUrl: '/images/pink-marker.png',
	  	shadowUrl: '/images/markers-shadow.png',
	  	iconSize: [36,46],
	  	shadowSize: [35,16],
	  	iconAnchor: [18,42],
	  	shadowAnchor: [11,13],
	  	popupAnchor: [0,-42]
	  };

  	angular.extend($scope, {
  		// layers: {
  		// 	baselayers: {
    //       googleRoadmap: {
    //           name: 'Google Streets',
    //           layerType: 'ROADMAP',
    //           type: 'google'
    //       }
  		// 	}
  		// },
  		geojson: {}
  	});

  	$http.get(fileName)
		.then(function(result) {
			angular.extend($scope.geojson, {
				outline: {
					data: result.data,
					style: {
						weight: 2,
						opacity: 1,
						color: '#E03D69',
						fillOpacity: 0
					}
				}
			});
		});
		angular.extend($scope.geojson, {
			election: {
				data: countyElectionInfo,
				style: function(feature) {return {};},
				pointToLayer: function(feature, latlng) {
					return new L.marker(latlng, {icon: L.icon(pollingIcon)})
				},
				onEachFeature: function(feature, layer) {
					feature.id = pollingPlaceIndex;
					pollingPlaceIndex++;
					layer.bindPopup("<a href='#/counties/"+$routeParams.countyName+"/"+feature.id+"' class='popup-link'><span class='popup-text'>" + feature.properties.location + "<br>" + feature.properties.datesSimplified + "</span><i class='popup-icon fa fa-chevron-right fa-2x' aria-label='view polling place details '></i></a>");
				}
			}
		});

		// geolocation
		var pollingPlaces = countyElectionInfo[0].features;
		this.sortedPollingPlaces = pollingPlaces.slice(); // copy so as not to mess up IDs of routes for polling places within a county
		var sortedPollingPlaces = this.sortedPollingPlaces;
		this.sorted = "Sorting by distance is OFF";
		var sorted = this.sorted;

		var compare = function(a,b) {
		  if (a.distance < b.distance)
		    return -1;
		  if (a.distance > b.distance)
		    return 1;
		  return 0;
		}

		var haversine = function(userLat, userLon, placeLat, placeLon) {
			function toRad(x) {
			  return x * Math.PI / 180;
			}

			var R = 3961; // mi
			var x1 = userLat-placeLat;
			var dLat = toRad(x1);  
			var x2 = userLon-placeLon;
			var dLon = toRad(x2);  
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
        Math.cos(toRad(placeLat)) * Math.cos(toRad(userLat)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);  
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			var d = R * c; 

			return d;
		};

		var computeDistances = function(userPosition) {
			for (var i = 0; i < sortedPollingPlaces.length; i++) {
				var place = sortedPollingPlaces[i];
				place.distance = haversine(userPosition.latitude, userPosition.longitude, place.geometry.coordinates[1], place.geometry.coordinates[0]);
			};
		};

		navigator.geolocation.getCurrentPosition(function(position) {
			computeDistances(position.coords);
			sortedPollingPlaces = sortedPollingPlaces.sort(compare);
			sorted = "Sorting by distance is ON";
		});

  }]);
