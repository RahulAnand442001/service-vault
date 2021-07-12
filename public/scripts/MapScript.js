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
	center: [84.23214445880126, 20.476081036941025],
	zoom: 6.8,
	scrollZoom: true,
});

const stores = {
	type: "FeatureCollection",
	features: [
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [84.79274355855, 19.28905928025253],
			},
			id: 1,
			properties: {
				phoneFormatted: "(+91) 9875463879",
				address: "Station Square",
				city: "Berhampur",
				country: "India",
				postalCode: "760007",
				state: "Odisha",
			},
			edges: {
				Rasulgarh: 175,
				Puri: 147,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.917817237996, 19.8170676248685],
			},
			id: 2,
			properties: {
				phoneFormatted: "(+91) 9569241871",
				address: "Little Chef",
				city: "Puri",
				country: "India",
				postalCode: "752001",
				state: "Odisha",
			},
			edges: {
				Cuttack: 82,
				Rasulgarh: 61,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.88389975480322, 20.46770883866313],
			},
			id: 3,
			properties: {
				phoneFormatted: "(+91) 9629778521",
				address: "Kanika RajBhati Fort",
				city: "Cuttack",
				country: "India",
				postalCode: "753001",
				state: "Odisha",
			},
			edges: {
				Rourkela: 300,
				"Saheed Nagar": 24,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.61878219250218, 20.168284334957477],
			},
			id: 4,
			properties: {
				phoneFormatted: "(+91) 9211547890",
				address: "Khorda Fort",
				city: "Khorda",
				country: "India",
				postalCode: "752050",
				state: "Odisha",
			},
			edges: {
				Puri: 63,
				Berhampur: 147,
				Rasulgarh: 31,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [84.85284671953002, 22.239854981678576],
			},
			id: 5,
			properties: {
				phoneFormatted: "(+91) 9655432147",
				address: "Nehru Traffic Park",
				city: "Rourkela",
				country: "India",
				postalCode: "769001",
				state: "Odisha",
			},
			edges: {
				Berhampur: 475,
				Puri: 381,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.85623449185732, 20.29155365788034],
			},
			id: 6,
			properties: {
				phoneFormatted: "(+91) 9766548817",
				address: "Esplanade",
				city: "Rasulgarh",
				country: "India",
				postalCode: "751010",
				state: "Odisha",
			},
			edges: {
				Cuttack: 23,
				Rourkela: 321,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.84758586393309, 20.28973409579],
			},
			id: 7,
			properties: {
				phoneFormatted: "(03222) 244157 ",
				address: "Utkal Kanika Gallaria",
				city: "Saheed Nagar",
				country: "India",
				postalCode: "751007",
				state: "Odisha",
			},
			edges: {
				Berhampur: 173,
				Puri: 68,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [83.97492147985565, 21.459833562314216],
			},
			id: 8,
			properties: {
				phoneFormatted: "(06856) 704598",
				address: "City Centre Mall",
				city: "Sambalpur",
				country: "India",
				postalCode: "768001",
				state: "Odisha",
			},
			edges: {
				Berhampur: 326,
				Balangir: 124,
				Jeypore: 396,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [83.48527323030089, 20.7037338716532],
			},
			id: 9,
			properties: {
				phoneFormatted: "(06789) 962322",
				address: "Ambika Telecom",
				city: "Balangir",
				country: "India",
				postalCode: "767001",
				state: "Odisha",
			},
			edges: {
				Jeypore: 272,
				Rayagada: 215,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [82.57341349649118, 18.85689773376403],
			},
			id: 10,
			properties: {
				phoneFormatted: "(+91) 1234567898",
				address: "S P Enterprises",
				city: "Jeypore",
				country: "India",
				postalCode: "764001",
				state: "Odisha",
			},
			edges: {
				Berhampur: 339,
				Rayagada: 134,
				Khorda: 488,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [83.40762814818618, 19.16802830955146],
			},
			id: 11,
			properties: {
				phoneFormatted: "(03225) 911790",
				address: "Kapilas Hotel",
				city: "Rayagada",
				country: "India",
				postalCode: "765001",
				state: "Odisha",
			},
			edges: {
				Sambalpur: 332,
				Rasulgarh: 385,
				Khorda: 355,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [86.50492147985565, 21.06713126560804],
			},
			id: 12,
			properties: {
				phoneFormatted: "(+91) 6384569721",
				address: "Behera Complex",
				city: "Bhadrak",
				country: "India",
				postalCode: "756100",
				state: "Odisha",
			},
			edges: {
				Cuttack: 106,
				Rasulgarh: 123,
				Balangir: 405,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [86.34349632243288, 20.853543729445107],
			},
			id: 13,
			properties: {
				phoneFormatted: "(08856) 123456",
				address: "Future Travels",
				city: "Jajpur",
				country: "India",
				postalCode: "755036",
				state: "Odisha",
			},
			edges: {
				Khorda: 124,
				Cuttack: 78,
				Bhadrak: 36,
				"Saheed Nagar": 97,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [86.73651547654663, 21.936987974511126],
			},
			id: 14,
			properties: {
				phoneFormatted: "(+91) 7058974563",
				address: "Chandan Bazar",
				city: "Baripada",
				country: "India",
				postalCode: "757001",
				state: "Odisha",
			},
			edges: {
				Bhadrak: 124,
				Keonjhar: 164,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [85.59620748055067, 21.643524391737813],
			},
			id: 15,
			properties: {
				phoneFormatted: "(02235) 707077",
				phone: "9875463879",
				address: "Cineplex",
				city: "Keonjhar",
				country: "India",
				postalCode: "758001",
				state: "Odisha",
			},
			edges: {
				Rourkela: 185,
				Khorda: 227,
				Cuttack: 181,
			},
		},
		{
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [84.320248065, 20.84172445],
			},
			id: 16,
			properties: {
				phoneFormatted: "(+91) 9875463879",
				phone: "9875463879",
				address: "A1 Electronics",
				city: "Baudh",
				country: "India",
				postalCode: "762014",
				state: "Odisha",
			},
			edges: {
				Balangir: 98,
				Sambalpur: 98,
			},
		},
	],
};

map.on("load", (e) => {
	map.addSource("places", {
		type: "geojson",
		data: stores,
	});
	addMarkers();
	buildLocationList(stores);
});

map.on("click", function (e) {
	const features = map.queryRenderedFeatures(e.point, {
		layers: ["locations"],
	});

	if (features.length) {
		const clickedPoint = features[0];
		flyToStore(clickedPoint);
		createPopUp(clickedPoint);
	}
});

const buildLocationList = (data) => {
	data.features.forEach((store, i) => {
		const { id, properties } = store;

		// element creation
		const listings = document.getElementById("listings");
		const listing = listings.appendChild(document.createElement("div"));
		listing.id = `listing-${id}`;
		listing.className = "item";

		const link = listing.appendChild(document.createElement("a"));
		link.href = "#";
		link.className = "title";
		link.id = `link-${id}`;
		link.innerHTML = properties.address;

		const details = listing.appendChild(document.createElement("div"));
		details.className = "details";
		details.innerHTML = `<span class="address__details">${properties.city} · ${properties.phoneFormatted}</span>`;

		// dialog box functionality

		details.innerHTML += `
			<button type="submit" class="page__link" id="page__link-${id}">
			<img src="../assets/eye-solid.svg" alt="eye" class="visit__logo">
			</button>
		`;

		details.innerHTML += `
			<dialog id="favDialog-${id}" class="details__dialog">
				<form method="dialog">
					<p>${properties.city}</p>
					<button value="cancel">Cancel</button>
				</form>
	  		</dialog>
		`;

		let insightBtn = document.getElementById(`page__link-${id}`);
		let dialogBox = document.getElementById(`favDialog-${id}`);
		insightBtn.addEventListener("click", function onOpen() {
			if (typeof dialogBox.showModal === "function") {
				dialogBox.showModal();
			} else {
				alert("The <dialog> API is not supported by this browser");
			}
		});
	});
};

const flyToStore = (currentFeature) => {
	map.flyTo({
		center: currentFeature.geometry.coordinates,
		zoom: 10,
	});
};

const createPopUp = (currentFeature) => {
	const popUps = document.getElementsByClassName("mapboxgl-popup");
	if (popUps[0]) popUps[0].remove();

	const popup = new mapboxgl.Popup({ closeOnClick: false })
		.setLngLat(currentFeature.geometry.coordinates)
		.setHTML(
			"<h3>SERVICE VAULT</h3>" +
				"<h4>" +
				currentFeature.properties.address +
				"</h4>",
		)
		.addTo(map);
};

const addMarkers = () => {
	stores.features.forEach((marker) => {
		const el = document.createElement("div");
		el.id = "marker-" + marker.id;
		el.className = "marker";

		el.addEventListener("click", function (e) {
			flyToStore(marker);
			createPopUp(marker);
			e.stopPropagation();
		});

		new mapboxgl.Marker(el, { offset: [0, -23] })
			.setLngLat(marker.geometry.coordinates)
			.addTo(map);
	});
};
