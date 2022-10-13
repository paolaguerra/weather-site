import React from 'react'
import PropTypes from "prop-types";

export const TemperaturaPrincipal = (props) => {
  return (
    <div className='temperatura-principal'>
        <p className='temperatura-principal'>{props.temp}°</p>
    </div>
  )
}

TemperaturaPrincipal.propTypes = {
  temp: PropTypes.number.isRequired,
};
