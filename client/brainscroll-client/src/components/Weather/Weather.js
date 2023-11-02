import "./Weather.scss";

const Weather = ({ weather }) => {
  return (
    <section className="weather">
      <article className="card">
        <h3 className="card__title">{weather.name}</h3>
        <img
          className="card__image"
          src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="current weather"
        />
        <p className="card__time">{weather.time}</p>
        <p className="card__description">{weather.description}</p>
      </article>
    </section>
  );
};

export default Weather;
