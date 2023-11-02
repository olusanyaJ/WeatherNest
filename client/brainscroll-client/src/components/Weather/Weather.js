import "./Weather.scss";

const Weather = () => {
  return (
    <section className="weather">
      <article className="card">
        <h3 className="card__title">weatherLocation</h3>
        <img
          className="card__image"
          src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="current weather"
        />
        <p>weather temp</p>
        <p>time of day there now</p>
        <p>description</p>
      </article>
    </section>
  );
};

export default Weather;
