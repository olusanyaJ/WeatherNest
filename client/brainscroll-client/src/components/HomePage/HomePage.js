import Weather from "../Weather/Weather";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h2 className="home__intro">
          today's random weather forecast might surprise you with its unique
          twist and it is from{" "}
        </h2>
        <Weather />
      </div>
    </div>
  );
};

export default HomePage;
