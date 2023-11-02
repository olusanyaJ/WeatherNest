import "./SearchPage.scss";
import "../Weather/Weather.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [weather, setWeather] = useState(null);

  const { city } = useParams();

  useEffect(() => {
    const fetchWeatherByCity = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:2021/weather/${city}`
        );
        setWeather(data);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };
    fetchWeatherByCity();
  }, [city]);

  if (!weather) {
    return <>Loading....</>;
  }

  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__intro">
          discover the weather you seek in a city you're curious about, and let
          nature's tale unfold at your fingertips.
        </h2>
        <section className="weather">
          <article className="card">
            <h3 className="card__title">{weather.name}</h3>
            <img
              className="card__image"
              src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="current weather"
            />
            <p className="card__time">{weather.time}</p>
            <p className="card__description">{weather.description}</p>
          </article>
        </section>
        {/* <Weather /> */}
      </div>
    </div>
  );
};

export default SearchPage;
