require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");
const SERVER_PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(weatherRoutes);
app.listen(SERVER_PORT, () => {
	console.log(`this server is running on port really ${SERVER_PORT}`);
});
