import "react-clock/dist/Clock.css";

const Card = ({ data }) => {
  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column align-items-center mt-3">
        <h2>
          {data.name}, {data.sys.country}
        </h2>
        <h1>
          <img
            src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}`}
            alt=""
          />
          {data.main.temp}
        </h1>
        <p> {data.wind.speed}m/s SSW</p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>{data.weather[0].main}</p>
        <p>Visibility:10.0km</p>
      </div>
    );
  }
};

export default Card;
