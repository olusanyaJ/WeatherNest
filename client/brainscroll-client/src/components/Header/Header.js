import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   // if (city) {
  //   //   console.log(city);
  //   //   // fetchWeatherByCity();
  //   // }
  // };

  return (
    <header className="header">
      <div className="header__container">
        <Link to={`/`} className="header__link">
          <h1 className="header__title">WeatherNest</h1>
        </Link>

        <form action="" className="form">
          <div className="form__search form__flex">
            <input
              type="text"
              placeholder="Search a particular locations weather"
              className="form__input"
              name="searchLocation"
              value={city}
              onChange={handleChange}
            />
            <Link to={`/search/${city}`} className="form__button">
              <span className="header__title">Search</span>
            </Link>
          </div>
          <div className="form__compare form__flex">
            <input
              type="text"
              placeholder="Compare a particular locations weather"
              className="form__input"
              name="compareLocation"
              // value={city}
              // onClick={handleChange}
            />
            <Link to={`/compare`} className="form__button">
              <span className="header__title">Compare</span>
            </Link>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
