if (!("remove" in Element.prototype)) {
	Element.prototype.remove = function () {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}

mapboxgl.accessToken =
	"pk.eyJ1IjoicmFodWxhbmFuZDQ0MjAwMSIsImEiOiJja3F0bWptaGYxc3h1MnJxaHI1end0ZHVtIn0.mZiSzu17KjFTf6T4q45oxQ";

const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/light-v10",
	center: [85.83692320687396, 20.2556780617967],
	zoom: 13,
	scrollZoom: true,
});

map.on("load", (e) => {
	map.addSource("places", {
		type: "geojson",
		data: stores,
	});
	addMarkers();
	buildLocationList(stores);
});

//  data
var stores = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.78692320687396, 20.9056780617967],
			},
			properties: {
				phoneFormatted: "(202) 234-7336",
				phone: "2022347336",
				address: "1471 P St NW",
				city: "Washington DC",
				country: "United States",
				crossStreet: "at 15th St NW",
				postalCode: "20005",
				state: "D.C.",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.73692320687396, 20.6856780617967],
			},
			properties: {
				phoneFormatted: "(202) 507-8357",
				phone: "2025078357",
				address: "2221 I St NW",
				city: "Washington DC",
				country: "United States",
				crossStreet: "at 22nd St NW",
				postalCode: "20037",
				state: "D.C.",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.70692320687396, 20.6556780617967],
			},
			properties: {
				phoneFormatted: "(202) 387-9338",
				phone: "2023879338",
				address: "1512 Connecticut Ave NW",
				city: "Washington DC",
				country: "United States",
				crossStreet: "at Dupont Circle",
				postalCode: "20036",
				state: "D.C.",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.63692320687396, 20.5156780617967],
			},
			properties: {
				phoneFormatted: "(202) 337-9338",
				phone: "2023379338",
				address: "3333 M St NW",
				city: "Washington DC",
				country: "United States",
				crossStreet: "at 34th St NW",
				postalCode: "20007",
				state: "D.C.",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.59692320687396, 20.4856780617967],
			},
			properties: {
				phoneFormatted: "(202) 547-9338",
				phone: "2025479338",
				address: "221 Pennsylvania Ave SE",
				city: "Washington DC",
				country: "United States",
				crossStreet: "btwn 2nd & 3rd Sts. SE",
				postalCode: "20003",
				state: "D.C.",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.56692320687396, 20.4556780617967],
			},
			properties: {
				address: "8204 Baltimore Ave",
				city: "College Park",
				country: "United States",
				postalCode: "20740",
				state: "MD",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.50692320687396, 20.3856780617967],
			},
			properties: {
				phoneFormatted: "(301) 654-7336",
				phone: "3016547336",
				address: "4831 Bethesda Ave",
				cc: "US",
				city: "Bethesda",
				country: "United States",
				postalCode: "20814",
				state: "MD",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.48692320687396, 20.3556780617967],
			},
			properties: {
				phoneFormatted: "(571) 203-0082",
				phone: "5712030082",
				address: "11935 Democracy Dr",
				city: "Reston",
				country: "United States",
				crossStreet: "btw Explorer & Library",
				postalCode: "20190",
				state: "VA",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.46692320687396, 20.3156780617967],
			},
			properties: {
				phoneFormatted: "(703) 522-2016",
				phone: "7035222016",
				address: "4075 Wilson Blvd",
				city: "Arlington",
				country: "United States",
				crossStreet: "at N Randolph St.",
				postalCode: "22203",
				state: "VA",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.42692320687396, 20.2956780617967],
			},
			properties: {
				phoneFormatted: "(610) 642-9400",
				phone: "6106429400",
				address: "68 Coulter Ave",
				city: "Ardmore",
				country: "United States",
				postalCode: "19003",
				state: "PA",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.38692320687396, 20.2656780617967],
			},
			properties: {
				phoneFormatted: "(215) 386-1365",
				phone: "2153861365",
				address: "3925 Walnut St",
				city: "Philadelphia",
				country: "United States",
				postalCode: "19104",
				state: "PA",
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.34692320687396, 20.2156780617967],
			},
			properties: {
				phoneFormatted: "(202) 331-3355",
				phone: "2023313355",
				address: "1901 L St. NW",
				city: "Washington DC",
				country: "United States",
				crossStreet: "at 19th St",
				postalCode: "20036",
				state: "D.C.",
			},
		},
	],
};

stores.features.forEach((store, i) => (store.properties.id = i));

map.on("click", function (e) {
	const features = map.queryRenderedFeatures(e.point, {
		layers: ["locations"],
	});

	if (features.length) {
		const clickedPoint = features[0];

		flyToStore(clickedPoint);

		createPopUp(clickedPoint);

		const activeItem = document.getElementsByClassName("active");
		if (activeItem[0]) {
			activeItem[0].classList.remove("active");
		}
		const listing = document.getElementById(
			"listing-" + clickedPoint.properties.id,
		);
		listing.classList.add("active");
	}
});

const buildLocationList = (data) => {
	data.features.forEach((store, i) => {
		const prop = store.properties;

		const listings = document.getElementById("listings");
		const listing = listings.appendChild(document.createElement("div"));
		listing.id = "listing-" + data.features[i].properties.id;
		listing.className = "item";

		const link = listing.appendChild(document.createElement("a"));
		link.href = "#";
		link.className = "title";
		link.id = "link-" + prop.id;
		link.innerHTML = prop.address;

		const details = listing.appendChild(document.createElement("div"));
		details.innerHTML = prop.city;

		if (prop.phone) {
			details.innerHTML += " · " + prop.phoneFormatted;
		}
		if (prop.distance) {
			var roundedDistance = Math.round(prop.distance * 100) / 100;
			details.innerHTML +=
				"<p><strong>" + roundedDistance + " miles away</strong></p>";
		}

		link.addEventListener("click", (e) => {
			for (var i = 0; i < data.features.length; i++) {
				if (this.id === "link-" + data.features[i].properties.id) {
					var clickedListing = data.features[i];
					flyToStore(clickedListing);
					createPopUp(clickedListing);
				}
			}
			var activeItem = document.getElementsByClassName("active");
			if (activeItem[0]) {
				activeItem[0].classList.remove("active");
			}
			this.parentNode.classList.add("active");
		});
	});
};

const flyToStore = (currentFeature) => {
	map.flyTo({
		center: currentFeature.geometry.coordinates,
		zoom: 15,
	});
};

const createPopUp = (currentFeature) => {
	const popUps = document.getElementsByClassName("mapboxgl-popup");
	if (popUps[0]) popUps[0].remove();

	const popup = new mapboxgl.Popup({ closeOnClick: false })
		.setLngLat(currentFeature.geometry.coordinates)
		.setHTML(
			"<h3>Sweetgreen</h3>" +
				"<h4>" +
				currentFeature.properties.address +
				"</h4>",
		)
		.addTo(map);
};

const addMarkers = () => {
	stores.features.forEach((marker) => {
		const el = document.createElement("div");
		el.id = "marker-" + marker.properties.id;
		el.className = "marker";

		el.addEventListener("click", function (e) {
			flyToStore(marker);
			createPopUp(marker);
			const activeItem = document.getElementsByClassName("active");
			e.stopPropagation();
			if (activeItem[0]) {
				activeItem[0].classList.remove("active");
			}
			const listing = document.getElementById(
				"listing-" + marker.properties.id,
			);
			listing.classList.add("active");
		});

		new mapboxgl.Marker(el, { offset: [0, -23] })
			.setLngLat(marker.geometry.coordinates)
			.addTo(map);
	});
};
