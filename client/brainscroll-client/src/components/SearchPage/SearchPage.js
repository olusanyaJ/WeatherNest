import Weather from "../Weather/Weather";
import "./SearchPage.scss";

const SearchPage = () => {
  return (
    <div className="search">
      <div className="search__container">
        <h2 className="search__intro">
          discover the weather you seek in a city you're curious about, and let
          nature's tale unfold at your fingertips.
        </h2>
        <Weather />
      </div>
    </div>
  );
};

export default SearchPage;
