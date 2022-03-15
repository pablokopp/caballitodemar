import "./App.css";

import Trabajo from "./components/Trabajo/Trabajo";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>CABALLITO DE MAR</h1>
      </div>
      <div className="sinopsis">
        <p>
          Estoy solo en esta casa, no se que hacer no se me ocurre nada Estoy
          solo en esta casa, no se que hacer no se me ocurre nada Estoy solo en
          esta casa, no se que hacer no se me ocurre nada Estoy solo en esta
          casa, no se que hacer no se me ocurre nada Estoy solo en esta casa, no
          se que hacer no se me ocurre nada
        </p>
        <p>
          Estoy solo en esta casa, no se que hacer no se me ocurre nada Estoy
          solo en esta casa, no se que hacer no se me ocurre nada Estoy solo en
          esta casa, no se que hacer no se me ocurre nada Estoy solo en esta
          casa, no se que hacer no se me ocurre nada Estoy solo en esta casa, no
          se que hacer no se me ocurre nada
        </p>
      </div>
      <h2>ELENCO</h2>
      <div className="container-elenco">
        <Trabajo
          trabajo="Dramaturgia y Actuación"
          persona={[
            {
              nombre: "Emanuel Saldua",
              iglink: "https://www.instagram.com/emanuel_zaldua/",
            },
          ]}
        />
        <Trabajo
          trabajo="Composición y música en vivo"
          persona={[
            {
              nombre: "Horacio Pallarés",
              iglink: "https://www.instagram.com/hora.palla/",
            },
          ]}
        />
        <Trabajo
          trabajo="Dirección"
          persona={[
            {
              nombre: "Gonzalo Quintana",
              iglink: "https://www.instagram.com/gonzalo_quintana/",
            },
          ]}
        />
        <Trabajo
          trabajo="Escenografía y Vestuario"
          persona={[
            {
              nombre: "Paola Delgado",
              iglink: "https://www.instagram.com/paoladelgadoarte/",
            },
          ]}
        />

        <Trabajo
          trabajo="Asistencia en Escena"
          persona={[
            {
              nombre: "Yuri Alacrim",
              iglink: "https://www.instagram.com/yalecrim/",
            },
            {
              nombre: "Pablo Kopp",
              iglink: "https://www.instagram.com/pablo.popp/",
            },
          ]}
        />
      </div>

      <div className="container-logos">
        <a href="https://www.instagram.com/nunteatrobar/" target="_blank">
          <img src={require("./images/logonun.png")} alt="Nun Teatro bar" />
        </a>
      </div>
    </div>
  );
}

export default App;
