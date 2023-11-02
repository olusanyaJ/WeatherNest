import Weather from "../Weather/Weather";
import "./ComparePage.scss";

const ComparePage = () => {
  return (
    <div className="compare">
      <div className="compare__container">
        <div className="compare__inner">
          <h2 className="compare__intro">todays random weather is from</h2>
          <Weather />
        </div>
        <div className="compare__inner">
          <h2 className="compare__intro">the weather you want to compare is</h2>
          <Weather />
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
