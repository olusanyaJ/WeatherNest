const express = require("express");
const router = express.Router();
// example location
const location = "Tokyo";
const axios = require("axios");
const fs = require("fs");
<<<<<<< HEAD
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

router.get("/weather/:id", (req, res) => {
  const file = fs.readFileSync("./data/data.json");
  const data = JSON.parse(file);
  console.log(data);
  const singleWeather = data.find((weather) => weather.name === req.params.id);
  console.log(singleWeather);
  console.log(req.params);
  // falsey used for situations for when the id doesn't exist
  if (!singleWeather) {
    res.status(404).send("note not found");
    return;
  }
  console.log(data);
  res.status(200).send(singleWeather);
=======

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
>>>>>>> fd3d8bb9fe141786278e4d66495290f09c616eca
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// // example location
// const location = "Tokyo";
// const axios = require("axios");
// const fs = require("fs");

// // const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ed26d6a8ccfdd6d65ff8cece7c01c685`;

// function randomCities() {
//   const cities = [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "London",
//     "Paris",
//     "Berlin",
//     "Tokyo",
//     "Sydney",
//     "Toronto",
//     "Miami",
//   ];

//   const randomIndex = Math.floor(Math.random() * cities.length);
//   return cities[randomIndex];
// }

// const randomLocation = randomCities();

// const randomURL = `https://api.tomorrow.io/v4/weather/forecast?location=${randomLocation}&apikey=ge7vkxnYkekeaFtbVijkKttMRsfTt6NS`;

// router.get("/random", (req, res) => {
//   const getRandom = async () => {
//     try {
//       const response = await axios.get(randomURL);
//       console.log(response.data);
//       res.status(201).send(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   getRandom();
// });

// // router.get("/random/icon", (req, res) => {
// //   const getRandom = async () => {
// //     try {
// //       const response = await axios.get(randomURL);
// //       res.status(201).send(response.data.weather[0].icon);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   getRandom();
// // });

// router.get("/random/location", (req, res) => {
//   const getLocation = async () => {
//     try {
//       const response = await axios.get(randomURL);
//       res.status(200).send(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   getLocation();
// });

// router.get("/random/details", (req, res) => {
//   const getDetails = async () => {
//     try {
//       const response = await axios.get(randomURL);
//       res.status(201).send(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   getDetails();
// });

// router.get("/weather", (req, res) => {
//   const getLocation = async () => {
//     try {
//       const response = await axios.get(apiURL);
//       res.status(201).send(response.data.weather);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   getLocation();
// });

// router.get("/weather/icon", (req, res) => {
//   const getImage = async () => {
//     try {
//       const response = await axios.get(apiURL);
//       const iconNo = response.data.weather[0].icon;
//       console.log(iconNo);
//       const iconUrl = `https://openweathermap.org/img/wn/${iconNo}.png`;
//       res.status(201).send(iconUrl);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   getImage();
// });

// router.get("/weather/location", (req, res) => {
//   const getLocation = async () => {
//     try {
//       const response = await axios.get(apiURL);
//       res.status(200).send(response.data.name);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   getLocation();
// });

// router.get("/weather/details", (req, res) => {
//   const getDetails = async () => {
//     try {
//       const response = await axios.get(apiURL);
//       res.status(201).send(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   getDetails();
// });

// module.exports = router;
