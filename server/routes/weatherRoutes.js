const express = require("express");
const router = express.Router();
// example location
const location = "Tokyo";
const axios = require("axios");
const fs = require("fs");

// const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ed26d6a8ccfdd6d65ff8cece7c01c685`;

// const randomURL = `https://api.openweathermap.org/data/2.5/weather?q=${randomLocation}&appid=ed26d6a8ccfdd6d65ff8cece7c01c685`;

router.get("/random", (req, res) => {
	const file = fs.readFileSync("./data/data.json");
	const data = JSON.parse(file);
	function randomCities() {
		const cities = fs.readFileSync("./data/data.json");
		const data = JSON.parse(cities);
		const randomIndex = Math.floor(Math.random() * data.length);
		res.status(200).send(data[randomIndex]);
	}

	randomCities();
});

router.get("/weather", (req, res) => {
	const file = fs.readFileSync("./data/data.json");
	const data = JSON.parse(file);
	console.log(data);
	res.status(200).send(data);
});

module.exports = router;
