import services from "../public/data";
import collections from "collections";

const Graph = (services) => {
	const vertices = services.features;
	const serviceDetails = [];
	vertices.forEach((vertex) => {
		let temp = { properties: vertex["properties"], edges: vertex["edges"] };
		serviceDetails.push(new GraphNode(temp));
	});
	return serviceDetails;
};

class Graph {
	vertices = services.features;
}

class GraphNode {
	data = {};
	constructor(source) {
		this.data = source;
	}
}

export default GraphNode;
