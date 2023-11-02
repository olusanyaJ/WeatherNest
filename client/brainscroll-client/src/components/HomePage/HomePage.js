import Weather from "../Weather/Weather";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(`http://localhost:2021/random`);
        setWeather(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) {
    return <>Loading....</>;
  }

  return (
    <div className="home">
      <div className="home__container">
        <h2 className="home__intro">
          today's random weather forecast might surprise you with its unique
          twist and it is from{" "}
        </h2>
        <Weather weather={weather} />
      </div>
    </div>
  );
};

export default HomePage;
