import mongoose from "mongoose";
import GraphNode from "../helper/order.helper";

const OrderSchema = new mongoose.Schema({
	source: {},
	destination: {},
	details: {
		purchases: {
			type: Array,
			default: [],
		},
		cost: {
			type: Number,
			default: 0,
		},
	},
	time: Date,
});
