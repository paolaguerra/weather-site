import React from "react";
import PropTypes from "prop-types";

export const TemperaturaPrincipal = (props) => {
  return (
    <div className="temperatura-principal">
      <p className="nombre-ciudad">{props.city}</p>
      <p className="temperatura-principal">{props.temp}°</p>
      <div className="min-max-hoy">
        <p className="min-hoy">Min: {props.min}°</p>
        <p className="max-hoy">Max: {props.max}°</p>
      </div>
    </div>
  );
};

TemperaturaPrincipal.propTypes = {
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
