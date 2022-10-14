import React, { useState } from "react";
import { ClimaSemanal } from "./ClimaSemanal";
import logo from "./img/logo.png";
import { Input } from "./Input";
import { TemperaturaPrincipal } from "./TemperaturaPrincipal";

const Contenedor = () => {
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentCity, setCurrentCity] = useState("");
  const [currenMax, setCurrentMax] = useState(0);
  const [currenMin, setCurrentMin] = useState(0);
  const [date01, setDate01] = useState("0");
  const [date02, setDate02] = useState("0");
  const [date03, setDate03] = useState("0");
  const [date04, setDate04] = useState("0");
  const [date05, setDate05] = useState("0");
  const [dateMin01, setDateMin01] = useState(0);
  const [dateMin02, setDateMin02] = useState(0);
  const [dateMin03, setDateMin03] = useState(0);
  const [dateMin04, setDateMin04] = useState(0);
  const [dateMin05, setDateMin05] = useState(0);
  const [dateMax01, setDateMax01] = useState(0);
  const [dateMax02, setDateMax02] = useState(0);
  const [dateMax03, setDateMax03] = useState(0);
  const [dateMax04, setDateMax04] = useState(0);
  const [dateMax05, setDateMax05] = useState(0);
  //   const [myDays, setMyDays] = useState([]);

  const handleSave = async (item) => {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?" +
        "latitude=" +
        item.lat +
        "&longitude=" +
        item.long +
        "&current_weather=true" +
        "&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York"
    );
    const data = await response.json();
    console.log(data);

    setCurrentTemp(Math.trunc(data.current_weather.temperature));
    setCurrentCity(item.name);
    setCurrentMax(Math.trunc(data.daily.temperature_2m_max[0]));
    setCurrentMin(Math.trunc(data.daily.temperature_2m_min[0]));

    setDate01(data.daily.time[1]);
    setDate02(data.daily.time[2]);
    setDate03(data.daily.time[3]);
    setDate04(data.daily.time[4]);
    setDate05(data.daily.time[5]);

    setDateMin01(Math.trunc(data.daily.temperature_2m_min[1]));
    setDateMin02(Math.trunc(data.daily.temperature_2m_min[2]));
    setDateMin03(Math.trunc(data.daily.temperature_2m_min[3]));
    setDateMin04(Math.trunc(data.daily.temperature_2m_min[4]));
    setDateMin05(Math.trunc(data.daily.temperature_2m_min[5]));

    setDateMax01(Math.trunc(data.daily.temperature_2m_max[1]));
    setDateMax02(Math.trunc(data.daily.temperature_2m_max[2]));
    setDateMax03(Math.trunc(data.daily.temperature_2m_max[3]));
    setDateMax04(Math.trunc(data.daily.temperature_2m_max[4]));
    setDateMax05(Math.trunc(data.daily.temperature_2m_max[5]));

    // const myData = [];
    // for (let index = 1; index <= 5; index++) {
    //     const itemArray = {
    //         date: data.daily.time[index],
    //         tempMin: data.daily.temperature_2m_min[index],
    //         tempMax: data.daily.temperature_2m_max[index],
    //     };

    //     myData.push(itemArray);
    // }

    // setMyDays(myData);
  };

  return (
    <div className="contenedor">
      <div className="contendor-logo">
        <img className="logo" alt="logo" src={logo}></img>
        <h1 className="logo">𝗪𝗲𝗮𝘁𝗵𝗲𝗿𝗹𝘆</h1>
      </div>
      <TemperaturaPrincipal
        city={currentCity}
        temp={currentTemp}
        max={currenMax}
        min={currenMin}
      ></TemperaturaPrincipal>
      <Input onSave={handleSave}></Input>
      <div className="contenedor-CimaSemana">
        <ClimaSemanal
          date={date01}
          min={dateMin01}
          max={dateMax01}
        ></ClimaSemanal>
        <ClimaSemanal
          date={date02}
          min={dateMin02}
          max={dateMax02}
        ></ClimaSemanal>
        <ClimaSemanal
          date={date03}
          min={dateMin03}
          max={dateMax03}
        ></ClimaSemanal>
        <ClimaSemanal
          date={date04}
          min={dateMin04}
          max={dateMax04}
        ></ClimaSemanal>
        <ClimaSemanal
          date={date05}
          min={dateMin05}
          max={dateMax05}
        ></ClimaSemanal>
      </div>
      {/*
      <div className="contenedor-CimaSemana">
        {myDays.map((itemDay)=> {
            return <ClimaSemanal date={itemDay.date} min={itemDay.tempMin} max={itemDay.tempMax}></ClimaSemanal>
        })}
      </div>
      */}
    </div>
  );
};

export default Contenedor;
