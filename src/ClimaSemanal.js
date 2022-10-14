import React from "react";
import PropTypes from "prop-types";

export const ClimaSemanal = (props) => {
  return (
    <div className="clima-semanal">
      <p className="dia-semana">{props.date}</p>
      <div className="temp-min-max">
        <p className="temperatura-minima">Min: {props.min}°</p>
        <p className="temperatura-maxima">Max: {props.max}°</p>
      </div>
    </div>
  );
};

ClimaSemanal.propTypes = {
    date: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };
  