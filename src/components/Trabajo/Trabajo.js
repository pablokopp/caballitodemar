import Persona from "../Persona/Persona";
import React from "react";

const Trabajo = ({ trabajo, persona }) => {
  return (
    <div className="container-trabajo">
      <h3>{trabajo}</h3>
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
