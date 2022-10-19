import React, { useState } from "react";
import { ClimaSemanal } from "./ClimaSemanal";
import logo from "./img/logo.png";
import { Input } from "./Input";
import { InterpretationCode } from "./InterpretationCode";
import { TemperaturaPrincipal } from "./TemperaturaPrincipal";

const Contenedor = () => {
  const [currentCity, setCurrentCity] = useState("");
  const [myDays, setMyDays] = useState([]);
  const [weatherToday, setWeatherToday] = useState({
    currentTemp: 0,
    tempMin: 0,
    tempMax: 0,
    weatherCode: -1,
  });

  const handleSave = async (item) => {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?" +
        "latitude=" +
        item.lat +
        "&longitude=" +
        item.long +
        "&current_weather=true" +
        "&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York"
    );
    const data = await response.json();
    console.log(data);

    setCurrentCity(item.name);

    const dataToday = {
      currentTemp: Math.trunc(data.current_weather.temperature),
      tempMin: Math.trunc(data.daily.temperature_2m_min[0]),
      tempMax: Math.trunc(data.daily.temperature_2m_max[0]),
      weatherCode: data.daily.weathercode[0],
    };

    setWeatherToday(dataToday);

    const myData = [];
    for (let index = 1; index <= 5; index++) {
      const itemArray = {
        date: data.daily.time[index],
        tempMin: Math.trunc(data.daily.temperature_2m_min[index]),
        tempMax: Math.trunc(data.daily.temperature_2m_max[index]),
        weatherCode: data.daily.weathercode[index],
      };

      myData.push(itemArray);
    }

    setMyDays(myData);
  };

  return (
    <div className="contenedor">
      <div className="contendor-logo">
        <img className="logo" alt="logo" src={logo}></img>
        <h1 className="logo">𝗪𝗲𝗮𝘁𝗵𝗲𝗿𝗹𝘆</h1>
      </div>
      <TemperaturaPrincipal
        city={currentCity}
        temp={weatherToday.currentTemp}
        min={weatherToday.tempMin}
        max={weatherToday.tempMax}
      ></TemperaturaPrincipal>
      <InterpretationCode code={weatherToday.weatherCode}></InterpretationCode>
      <Input onSave={handleSave}></Input>
      <div className="contenedor-CimaSemana">
        <div className="contenedor-CimaSemana">
          {myDays.map((itemDay) => {
            return (
              <ClimaSemanal
                date={itemDay.date}
                min={itemDay.tempMin}
                max={itemDay.tempMax}
                code={itemDay.weatherCode}
              ></ClimaSemanal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contenedor;
