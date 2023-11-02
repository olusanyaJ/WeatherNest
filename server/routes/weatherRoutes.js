const express = require("express");
const router = express.Router();

const axios = require("axios");
const fs = require("fs");

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=ed26d6a8ccfdd6d65ff8cece7c01c685`;

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

router.get("/weather/:id", (req, res) => {
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
			const iconUrl = `https://openweathermap.org/img/wn/${iconNo}.png`;
			res.status(201).send(iconUrl);
		} catch (error) {
			console.error(error);
		}
	};

	getImage();
});

router.get("/weather/name", (req, res) => {
	const getName = async () => {
		try {
			const response = await axios.get(apiURL);
			res.status(201).send(response.data.name);
		} catch (error) {
			console.error(error);
		}
	};
	getName();
});

router.get("/details", (req, res) => {
	const getName = async () => {
		try {
			const response = await axios.get(apiURL);
			res.status(201).send(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	getName();
});

module.exports = router;
