import React, { useState } from "react";
import logo from "./img/logo.png";
import { Input } from "./Input";
import { TemperaturaPrincipal } from "./TemperaturaPrincipal";

const Contenedor = () => {
  const [currentTemp, setCurrentTemp] = useState(0);

  const handleSave = async (item) => {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?" +
        "latitude=" +
        item.lat +
        "&longitude=" +
        item.long +
        "&current_weather=true"
    );
    const data = await response.json();
    console.log(data);

    setCurrentTemp(data.current_weather.temperature);
  };

  return (
    <div className="contenedor">
      <div className="contendor-logo">
        <img className="logo" alt="logo" src={logo}></img>
        <h1 className="logo">𝗪𝗲𝗮𝘁𝗵𝗲𝗿𝗹𝘆</h1>
      </div>
      <TemperaturaPrincipal temp={currentTemp}></TemperaturaPrincipal>
      <Input onSave={handleSave}></Input>
    </div>
  );
};

export default Contenedor;
