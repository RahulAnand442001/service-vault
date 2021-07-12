import Heap from "collections/heap";

// get all vertices of graph
const getAllServices = (serviceList) => {
	const services = {};
	serviceList.features.forEach((service) => {
		let serviceItem = {
			data: service["properties"],
			edges: service["edges"],
			distance: 0,
			parentProvider: null,
		};
		services[service["properties"]["city"]] = serviceItem;
	});
	return services;
};

// dijkstra's algorithm for SSSP
const getShortestRoute = (servicesList, serviceReq) => {
	const dest = serviceReq.destination.properties.city;
	const source = serviceReq.source;
	const services = getAllServices(servicesList);
	for (let service in services) {
		if (services[service]["data"]["city"] === source["properties"]["city"]) {
			services[service]["distance"] = 0;
		} else {
			services[service]["distance"] = Number.POSITIVE_INFINITY;
		}
		services[service]["distance"]["parentProvider"] = null;
	}

	const pq = new Heap(services, null, (a, b) => b.distance - a.distance);

	while (pq.length > 0) {
		let currService = pq.pop();
		for (let neighbour in currService["edges"]) {
			let edgeWeight =
				currService["distance"] + currService["edges"][neighbour];
			let neighbourDist = services[neighbour]["distance"];
			if (edgeWeight < neighbourDist) {
				services[neighbour]["distance"] = edgeWeight;
				services[neighbour]["parentProvider"] = currService;
				pq.delete(services[neighbour]);
				pq.add(services[neighbour]);
			}
		}
	}

	return services[dest];
};

export { getAllServices, getShortestRoute };
