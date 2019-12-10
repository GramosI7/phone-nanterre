const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
	name: String,
	type: String,
	price: String,
	rating: String,
	warranty_years: String,
	file: String,
	available: Boolean
});

module.exports = mongoose.model("phone", phoneSchema);
