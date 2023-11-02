import Weather from "../Weather/Weather";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h2 className="home__intro">todays random weather is from</h2>
      </div>
      <Weather />
    </div>
  );
};

export default HomePage;
