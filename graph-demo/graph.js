//  sample

let cy = cytoscape({
	container: document.getElementById("cy"), // container to render in

	elements: [],

	style: [
		// the stylesheet for the graph
		{
			selector: "node",
			style: {
				"background-color": "#480032",
				label: "data(id)",
			},
		},

		{
			selector: "edge",
			style: {
				width: 1,
				"line-color": "#369",
				"target-arrow-color": "#369",
				"target-arrow-shape": "triangle",
				label: "data(label)",
				"font-size": "14px",
				color: "red",
			},
		},
	],

	style: cytoscape
		.stylesheet()
		.selector("edge")
		.css({
			width: 3,
			"line-color": "#CD113B",
			"target-arrow-color": "#EEB76B",
			"target-arrow-shape": "triangle",
			label: "data(label)",
			"font-size": "20px",
			color: "#fff",
		})
		.selector("node")
		.css({
			content: "data(id)",
			"text-valign": "center",
			color: "#EFF48E",
			"background-color": "#FFA900",
		})
		.selector(":selected")
		.css({
			"background-color": "black",
			"line-color": "black",
			"target-arrow-color": "black",
			"source-arrow-color": "black",
			"text-outline-color": "black",
		}),

	layout: {
		name: "grid",
		rows: 1,
	},
});

cy.add([
	{
		group: "nodes",
		data: { id: "Berhampur" },
		position: { x: 50, y: 200 },
	},
	{ group: "nodes", data: { id: "Puri" }, position: { x: 131, y: 226 } },
	{ group: "nodes", data: { id: "Cuttack" }, position: { x: -128, y: 143 } },
	{ group: "nodes", data: { id: "Khorda" }, position: { x: 249, y: -142 } },
	{ group: "nodes", data: { id: "Rourkela" }, position: { x: 191, y: 62 } },
	{ group: "nodes", data: { id: "Rasulgarh" }, position: { x: 66, y: 83 } },
	{
		group: "nodes",
		data: { id: "Saheed Nagar" },
		position: { x: 189, y: 300 },
	},
	{ group: "nodes", data: { id: "Sambalpur" }, position: { x: -250, y: -80 } },
	{ group: "nodes", data: { id: "Balangir" }, position: { x: -24, y: -120 } },
	{ group: "nodes", data: { id: "Jeypore" }, position: { x: -200, y: 100 } },
	{ group: "nodes", data: { id: "Rayagada" }, position: { x: 75, y: -100 } },
	{ group: "nodes", data: { id: "Bhadrak" }, position: { x: -88, y: 22 } },
	{ group: "nodes", data: { id: "Jajpur" }, position: { x: -150, y: -150 } },
	{ group: "nodes", data: { id: "Baripada" }, position: { x: 290, y: 390 } },
	{ group: "nodes", data: { id: "Keonjhar" }, position: { x: 191, y: -162 } },
	{ group: "nodes", data: { id: "Baudh" }, position: { x: 240, y: 183 } },

	// edges
	{
		group: "edges",
		data: { id: "e0", source: "Berhampur", target: "Rasulgarh", label: 175 },
	},
	{
		group: "edges",
		data: { id: "e1", source: "Berhampur", target: "Puri", label: 147 },
	},
	{
		group: "edges",
		data: { id: "e2", source: "Puri", target: "Cuttack", label: 82 },
	},
	{
		group: "edges",
		data: { id: "e3", source: "Puri", target: "Rasulgarh", label: 61 },
	},
	{
		group: "edges",
		data: { id: "e4", source: "Cuttack", target: "Rourkela", label: 300 },
	},
	{
		group: "edges",
		data: { id: "e5", source: "Cuttack", target: "Saheed Nagar", label: 24 },
	},
	{
		group: "edges",
		data: { id: "e6", source: "Khorda", target: "Puri", label: 63 },
	},
	{
		group: "edges",
		data: { id: "e7", source: "Khorda", target: "Berhampur", label: 147 },
	},
	{
		group: "edges",
		data: { id: "e8", source: "Khorda", target: "Rasulgarh", label: 31 },
	},
	{
		group: "edges",
		data: { id: "e9", source: "Rourkela", target: "Berhampur", label: 475 },
	},
	{
		group: "edges",
		data: { id: "e10", source: "Rourkela", target: "Puri", label: 381 },
	},
	{
		group: "edges",
		data: { id: "e11", source: "Rasulgarh", target: "Cuttack", label: 23 },
	},
	{
		group: "edges",
		data: { id: "e12", source: "Rasulgarh", target: "Rourkela", label: 321 },
	},
	{
		group: "edges",
		data: {
			id: "e13",
			source: "Saheed Nagar",
			target: "Berhampur",
			label: 173,
		},
	},
	{
		group: "edges",
		data: { id: "e14", source: "Saheed Nagar", target: "Puri", label: 68 },
	},
	{
		group: "edges",
		data: { id: "e15", source: "Sambalpur", target: "Berhampur", label: 326 },
	},
	{
		group: "edges",
		data: { id: "e16", source: "Sambalpur", target: "Balangir", label: 124 },
	},
	{
		group: "edges",
		data: { id: "e17", source: "Sambalpur", target: "Jeypore", label: 396 },
	},
	{
		group: "edges",
		data: { id: "e18", source: "Balangir", target: "Jeypore", label: 272 },
	},
	{
		group: "edges",
		data: { id: "e19", source: "Balangir", target: "Rayagada", label: 215 },
	},
	{
		group: "edges",
		data: { id: "e20", source: "Jeypore", target: "Rayagada", label: 134 },
	},
	{
		group: "edges",
		data: { id: "e21", source: "Jeypore", target: "Berhampur", label: 339 },
	},
	{
		group: "edges",
		data: { id: "e22", source: "Jeypore", target: "Khorda", label: 488 },
	},
	{
		group: "edges",
		data: { id: "e23", source: "Rayagada", target: "Sambalpur", label: 332 },
	},
	{
		group: "edges",
		data: { id: "e24", source: "Rayagada", target: "Rasulgarh", label: 385 },
	},
	{
		group: "edges",
		data: { id: "e25", source: "Rayagada", target: "Khorda", label: 335 },
	},
	{
		group: "edges",
		data: { id: "e26", source: "Bhadrak", target: "Cuttack", label: 106 },
	},
	{
		group: "edges",
		data: { id: "e27", source: "Bhadrak", target: "Rasulgarh", label: 123 },
	},
	{
		group: "edges",
		data: { id: "e28", source: "Bhadrak", target: "Balangir", label: 405 },
	},
	{
		group: "edges",
		data: { id: "e29", source: "Jajpur", target: "Khorda", label: 124 },
	},
	{
		group: "edges",
		data: { id: "e30", source: "Jajpur", target: "Cuttack", label: 78 },
	},
	{
		group: "edges",
		data: { id: "e31", source: "Jajpur", target: "Bhadrak", label: 36 },
	},
	{
		group: "edges",
		data: { id: "e32", source: "Jajpur", target: "Saheed Nagar", label: 97 },
	},
	{
		group: "edges",
		data: { id: "e33", source: "Baripada", target: "Bhadrak", label: 124 },
	},
	{
		group: "edges",
		data: { id: "e34", source: "Baripada", target: "Keonjhar", label: 164 },
	},
	{
		group: "edges",
		data: { id: "e35", source: "Keonjhar", target: "Rourkela", label: 185 },
	},
	{
		group: "edges",
		data: { id: "e36", source: "Keonjhar", target: "Khorda", label: 227 },
	},
	{
		group: "edges",
		data: { id: "e37", source: "Keonjhar", target: "Cuttack", label: 181 },
	},
	{
		group: "edges",
		data: { id: "e38", source: "Baudh", target: "Balangir", label: 98 },
	},
	{
		group: "edges",
		data: { id: "e39", source: "Baudh", target: "Sambalpur", label: 98 },
	},
]);
cy.on("click", "node", function (evt) {
	var node = evt.target;
	console.clear();
	console.log(node.position());
});
