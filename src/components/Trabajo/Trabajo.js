import Persona from "../Persona/Persona";
import React from "react";

const Trabajo = ({ trabajo, persona }) => {
  return (
    <div className="container-trabajo">
      <h2>{trabajo}</h2>
      <div className="container-personas">
        {persona &&
          persona.map((cosa) => (
            <Persona
              nombre={cosa.nombre}
              iglink={cosa.iglink}
              weblink={cosa.weblink}
            />
          ))}
      </div>
    </div>
  );
};

export default Trabajo;
