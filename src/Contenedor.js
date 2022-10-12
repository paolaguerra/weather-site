import React from "react";
import logo from "./img/logo.png";

const Contenedor = () => {
  return (
    <div className="contenedor">
      <div className="contendor-logo">
      <img className="logo" alt="logo" src={logo}></img>
        <h1 className="logo">𝗪𝗲𝗮𝘁𝗵𝗲𝗿𝗹𝘆</h1>
      </div>
      <div className="contenedor-buscador">
        <input className="buscar-localidad" placeholder="Search a City"></input>
      </div>
    </div>
  );
};

export default Contenedor;
