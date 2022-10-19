import React from "react";
import PropTypes from "prop-types";
import clearsky from "./img/clearsky.png";
import mainlyclear from "./img/mainlyclear.png";
import overcast from "./img/overcast.png";
import fog from "./img/fog.png";
import drizzle from "./img/drizzle.png";
import freezingdrizzle from "./img/freezingdrizzle.png";
import rain from "./img/rain.png";
import snow from "./img/snow.png";
import thunderstorm from "./img/thunderstorm.png";

export const InterpretationCode = (props) => {
  let description = "";

  switch (props.code) {
    case 0:
      description = (
        <div className="clearsky">
          <p className="clearsky">Clear sky</p>
          <img className="clearsky" alt="clearsky" src={clearsky}></img>
        </div>
      );
      break;
    case 1:
      description = (
        <div className="mainlyclear">
          <p className="mainlyclear">Mainly clear</p>
          <img
            className="mainlyclear"
            alt="mainlyclear"
            src={mainlyclear}
          ></img>
        </div>
      );
      break;
    case 2:
      description = (
        <div className="mainlyclear">
          <p className="mainlyclear">Partly Cloudy</p>
          <img
            className="mainlyclear"
            alt="mainlyclear"
            src={mainlyclear}
          ></img>
        </div>
      );
      break;
    case 3:
      description = (
        <div className="overcast">
          <p className="overcast">Overcast</p>
          <img className="overcast" alt="overcast" src={overcast}></img>
        </div>
      );
      break;
    case 45:
      description = (
        <div className="fog">
          <p className="fog">Fog</p>
          <img className="fog" alt="fog" src={fog}></img>
        </div>
      );
      break;
    case 48:
      description = (
        <div className="fog">
          <p className="fog">Depositing Rime Fog</p>
          <img className="fog" alt="fog" src={fog}></img>
        </div>
      );
      break;
    case 51:
      description = (
        <div className="drizzle">
          <p className="drizzle">Drizzle: Light</p>
          <img className="drizzle" alt="drizzle" src={drizzle}></img>
        </div>
      );
      break;
    case 53:
      description = (
        <div className="drizzle">
          <p className="drizzle">Drizzle: Moderate</p>
          <img className="drizzle" alt="drizzle" src={drizzle}></img>
        </div>
      );
      break;
    case 55:
      description = (
        <div className="drizzle">
          <p className="drizzle">Drizzle: Dense Intensity</p>
          <img className="drizzle" alt="drizzle" src={drizzle}></img>
        </div>
      );
      break;
    case 56:
      description = (
        <div className="freezingdrizzle">
          <p className="freezingdrizzle">Freezing Drizzle: Light</p>
          <img
            className="freezingdrizzle"
            alt="freezingdrizzle"
            src={freezingdrizzle}
          ></img>
        </div>
      );
      break;
    case 57:
      description = (
        <div className="freezingdrizzle">
          <p className="freezingdrizzle">Freezing Drizzle: Dense Intensity</p>
          <img
            className="freezingdrizzle"
            alt="freezingdrizzle"
            src={freezingdrizzle}
          ></img>
        </div>
      );
      break;
    case 61:
      description = (
        <div className="rain">
          <p className="rain">Rain: Slight</p>
          <img className="rain" alt="rain" src={rain}></img>
        </div>
      );
      break;
    case 63:
      description = (
        <div className="rain">
          <p className="rain">Rain: Moderate</p>
          <img className="rain" alt="rain" src={rain}></img>
        </div>
      );
      break;
    case 65:
      description = (
        <div className="rain">
          <p className="rain">Rain: Heavy Intensity</p>
          <img className="rain" alt="rain" src={rain}></img>
        </div>
      );
      break;
    case 66:
      description = (
        <div className="freezingdrizzle">
          <p className="freezingdrizzle">Freezing Rain: Light</p>
          <img
            className="freezingdrizzle"
            alt="freezingdrizzle"
            src={freezingdrizzle}
          ></img>
        </div>
      );
      break;
    case 67:
      description = (
        <div className="freezingdrizzle">
          <p className="freezingdrizzle">Freezing Rain: Heavy Intensity</p>
          <img
            className="freezingdrizzle"
            alt="freezingdrizzle"
            src={freezingdrizzle}
          ></img>
        </div>
      );
      break;
    case 71:
      description = (
        <div className="snow">
          <p className="snow">Snow fall: Slight</p>
          <img className="snow" alt="snow" src={snow}></img>
        </div>
      );
      break;
    case 73:
      description = (
        <div className="snow">
          <p className="snow">Snow fall: Moderate</p>
          <img className="snow" alt="snow" src={snow}></img>
        </div>
      );
      break;
    case 75:
      description = (
        <div className="snow">
          <p className="snow">Snow fall: Heavy Intensity</p>
          <img className="snow" alt="snow" src={snow}></img>
        </div>
      );
      break;
    case 77:
      description = (
        <div className="snow">
          <p className="snow">Snow grains</p>
          <img className="snow" alt="snow" src={snow}></img>
        </div>
      );
      break;
    case 80:
      description = (
        <div className="rain">
          <p className="rain">Rain showers: Slight</p>
          <img className="rain" alt="rain" src={rain}></img>
        </div>
      );
      break;
    case 81:
      description = (
        <div className="rain">
          <p className="rain">Rain showers: Moderate</p>
          <img className="rain" alt="rain" src={rain}></img>
        </div>
      );
      break;
    case 82:
      description = (
        <div className="rain">
          <p className="rain">Rain showers: Violent</p>
          <img className="rain" alt="rain" src={rain}></img>
        </div>
      );
      break;
    case 85:
      description = (
        <div className="snow">
          <p className="snow">Snow showers slight</p>
          <img className="snow" alt="snow" src={snow}></img>
        </div>
      );
      break;
    case 86:
      description = (
        <div className="snow">
          <p className="snow">Snow showers heavy</p>
          <img className="snow" alt="snow" src={snow}></img>
        </div>
      );
      break;
    case 95:
      description = (
        <div className="thunderstorm">
          <p className="thunderstorm">Thunderstorm: Slight or moderate</p>
          <img
            className="thunderstorm"
            alt="thunderstorm"
            src={thunderstorm}
          ></img>
        </div>
      );
      break;
    case 96:
      description = (
        <div className="thunderstorm">
          <p className="thunderstorm">Thunderstorm with slight hail</p>
          <img
            className="thunderstorm"
            alt="thunderstorm"
            src={thunderstorm}
          ></img>
        </div>
      );
      break;
    case 99:
      description = (
        <div className="thunderstorm">
          <p className="thunderstorm">Thunderstorm with heavy hail</p>
          <img
            className="thunderstorm"
            alt="thunderstorm"
            src={thunderstorm}
          ></img>
        </div>
      );
      break;

    default:
      description = "";
      break;
  }

  return (
    <div className="cont-int-code">
      <div className="int-code">{description}</div>
    </div>
  );
};

InterpretationCode.propTypes = {
  code: PropTypes.number,
};
