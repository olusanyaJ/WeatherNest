const express = require("express");
const router = express.Router();
// example location
const location = "Tokyo";
const axios = require("axios");
const fs = require("fs");

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ed26d6a8ccfdd6d65ff8cece7c01c685`;

function randomCities() {
	const cities = [
		"New York",
		"Los Angeles",
		"Chicago",
		"London",
		"Paris",
		"Berlin",
		"Tokyo",
		"Sydney",
		"Toronto",
		"Miami",
	];

	const randomIndex = Math.floor(Math.random() * cities.length);
	return cities[randomIndex];
}

const randomLocation = randomCities();
console.log(randomLocation);

const randomURL = `https://api.openweathermap.org/data/2.5/weather?q=${randomLocation}&appid=ed26d6a8ccfdd6d65ff8cece7c01c685`;

router.get("/random", (req, res) => {
	const getRandom = async () => {
		try {
			const response = await axios.get(randomURL);
			res.status(201).send(response.data.weather);
		} catch (error) {
			console.error(error);
		}
	};

	getRandom();
});

router.get("/weather", (req, res) => {
	const getLocation = async () => {
		try {
			const response = await axios.get(apiURL);
			res.status(201).send(response.data.weather);
		} catch (error) {
			console.error(error);
		}
	};

	getLocation();
});

router.get("/weather/icon", (req, res) => {
	const getImage = async () => {
		try {
			const response = await axios.get(apiURL);
			const iconNo = response.data.weather[0].icon;
			console.log(iconNo);
			const iconUrl = `https://openweathermap.org/img/wn/${iconNo}.png`;
			res.status(201).send(iconUrl);
		} catch (error) {
			console.error(error);
		}
	};

	getImage();
});

router.get("/weather/location", (req, res) => {
	const getLocation = async () => {
		try {
			const response = await axios.get(apiURL);
			res.status(200).send(response.data.name);
		} catch (error) {
			console.error(error);
		}
	};
	getLocation();
});

router.get("weather/details", (req, res) => {
	const getDetails = async () => {
		try {
			const response = await axios.get(apiURL);
			res.status(201).send(response);
		} catch (error) {
			console.error(error);
		}
	};

	getDetails();
});

module.exports = router;
