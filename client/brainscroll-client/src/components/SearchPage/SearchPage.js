import Weather from "../Weather/Weather";
import "./SearchPage.scss";

const SearchPage = () => {
  return (
    <div className="search">
      <div className="search__container">
        <h2 className="weather__intro">the weather you searched is </h2>
      </div>
      <Weather />
    </div>
  );
};

export default SearchPage;
