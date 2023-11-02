import Weather from "../Weather/Weather";
import "./ComparePage.scss";

const ComparePage = () => {
  return (
    <div className="compare">
      <div className="compare__container">
        <div className="compare__inner">
          <h2 className="compare__intro">today's random weather forecast</h2>
          <Weather />
        </div>
        <div className="compare__inner">
          <h2 className="compare__intro">
            the weather of the city you're curious about
          </h2>
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
