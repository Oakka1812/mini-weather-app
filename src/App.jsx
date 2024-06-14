import React, { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, api_key } from "../src/api/api";

const App = () => {
  const [data, setData] = useState({});
  const fetchWeather = async (city_name) => {
    if (city_name !== undefined) {
      try{
        const res = await api.get(
          `weather?q=${city_name}&appid=${api_key}&units=metric`
        );
        setData(res.data);
      }catch{
        window.alert('City name is wrong...Try again')
      }
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <div className="w-full min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>Weather App</h2>
      <div className="shadow-lg bg-light p-5 font-monospace">
        <Form fetchWeather={fetchWeather} />
        <Card data={data} />
      </div>
    </div>
  );
};

export default App;
