import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">WeatherNest</h1>
        <form action="" className="form">
          <div className="form__search form__flex">
            <input
              type="text"
              placeholder="Search a particular locations weather"
              className="form__input"
            />
            <button type="submit" className="form__button">
              Search
            </button>
          </div>
          <div className="form__compare form__flex">
            <input
              type="text"
              placeholder="Compare a particular locations weather"
              className="form__input"
            />
            <button type="submit" className="form__button">
              Compare
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
