import mongoose from "mongoose";

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
		contact: String,
	},
	time: Date,
});

export default OrderSchema;
