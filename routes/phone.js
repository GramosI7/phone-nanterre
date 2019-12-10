const express = require("express");
const router = express.Router();
const Phone = require("../models/phone");
const multer = require("multer");
const fs = require("fs");


//for connect db
const mongoose = require("mongoose");
let db = "mongodb://localhost:27017/produits_db";
mongoose.connect(db, {
	useNewUrlParser: true
}, err => {
	if (err) {
		console.log("Error!! " + err);
	} else {
		console.log("Connected mongodb");
	}
});

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname)
	}
})

var upload = multer({
	storage: storage
})

// Add phone START ************
router.post("/addPhone", upload.single("file"), (req, res, next) => {
	console.log("req.body: ", req.body);
	console.log("req.file: ", req.file);

	let phone = new Phone();
	phone.name = req.body.name;
	phone.type = req.body.type;
	phone.price = req.body.price;
	phone.rating = req.body.rating;
	phone.warranty_years = req.body.warranty_years;
	phone.available = req.body.available;
	phone.file = req.file.path;

	phone.save((error, addPhone) => {
		if (error) {
			console.log(error);
		} else {
			console.log(addPhone, +"icicicici");
			res.status(200).send(addPhone);
		}
	});
});

// Add phone END ************

// All phone START
router.get("/allPhone", (req, res) => {
	Phone.find((error, allPhone) => {
		if (error) {
			console.log(error);
			res.status(500).send(error);
		} else {
			console.log(allPhone);
			res.status(200).send(allPhone);
		}
	});
});
// All phone END

// Update phone START
router.put("/modifPhone/", (req, res) => {
	Phone.findById(req.body.id, (error, phone) => {
		if (error) {
			console.log(error);
			res.status(500).send(error);
		} else {
			console.log(req.body);
			phone.name = req.body.name;
			phone.type = req.body.type;
			phone.price = req.body.price;
			phone.rating = req.body.rating;
			phone.warranty_years = req.body.warranty_years;
			phone.available = req.body.available;
			console.log(phone);

			phone.save(error => {
				if (error) {
					console.log(error);
				} else {
					console.log(phone);
					res.send(200);
				}
			});
		}
	});
});

// Update phone END

//Delete phone START
router.delete("/deletePhone/:id", (req, res) => {
	Phone.deleteOne({
		_id: req.params.id
	}, (err, phone) => {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			console.log(phone);
			res.send("utilisateur supprimé avec succés");
		}
	});
});

//Delete phone END

module.exports = router;