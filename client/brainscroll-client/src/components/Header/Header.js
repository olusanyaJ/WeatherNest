import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* <Link key={} to={`/`} className="header__link"> */}
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
            />
            <Link to={`/search`} className="form__button">
              <span className="header__title">Search</span>
            </Link>
          </div>
          <div className="form__compare form__flex">
            <input
              type="text"
              placeholder="Compare a particular locations weather"
              className="form__input"
              name="compareLocation"
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
