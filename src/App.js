import "./App.css";

import Trabajo from "./components/Trabajo/Trabajo";
import obraLogo from "./images/logocaballito.png";

function App() {
  return (
    <div className="App">
      <div className="title">
        <img src={obraLogo} alt="Caballito de Mar" />
      </div>
      <div className="sinopsis">
        <p>Si no la hubiese visto no la habría conocido…</p>
        <p>Si no la hubiese conocido no me habría enamorado…</p>
        <p>¿Cómo habría sido?</p>
        <p>
          Tal vez estaría rodeado de hijos, de miles de hijos jugando a la ronda
          de San Miguel.
        </p>
        <p>
          Tal vez no tendría motivos para preguntarme qué hago acá, o tendría
          otros motivos.
        </p>
        <p>Motivos nunca faltan.</p>
        <p>¡Qué sabe uno!</p>
      </div>
      <div className="container-elenco">
        <h2>ELENCO</h2>

        <Trabajo
          trabajo="Dramaturgia y Actuación"
          persona={[
            {
              nombre: "Emanuel Zaldua",
              iglink: "https://www.instagram.com/emanuel_zaldua/",
            },
          ]}
        />
        <Trabajo
          trabajo="Composición y música en vivo"
          persona={[
            {
              nombre: "Horacio Martín Pallarés",
              iglink: "https://www.instagram.com/hora.palla/",
            },
          ]}
        />
        <Trabajo
          trabajo="Asistencia en Escena"
          persona={[
            {
              nombre: "Yuri Alecrim",
              iglink: "https://www.instagram.com/yalecrim/",
            },
            {
              nombre: "Pablo Kopp",
              iglink: "https://www.instagram.com/pablo.popp/",
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
          trabajo="Iluminacion"
          persona={[
            {
              nombre: "Matias Sendón",
              iglink: "https://www.instagram.com/",
            },
          ]}
        />
        <Trabajo
          trabajo="Diseño gráfico"
          persona={[
            {
              nombre: "Yuri Alecrim",
              iglink: "https://www.instagram.com/yalecrim/",
            },
          ]}
        />
        <Trabajo
          trabajo="Diseño de movimiento"
          persona={[
            {
              nombre: "Carolina Borca",
              iglink: "https://www.instagram.com/caroborca",
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
      </div>
      <div className="container-alternativa">
        {/* <h2>Te gustó?</h2> */}
        <a href="https://www.alternativateatral.com/obra78086-caballito-de-mar">
          Dejanos un mensaje
        </a>
        {/* <h2>Querés volver?</h2> */}
        <a href="https://publico.alternativateatral.com/entradas78086-caballito-de-mar?o=14">
          Reserva de entradas
        </a>
      </div>
      <div className="container-logos">
        <a
          href="https://www.alternativateatral.com/obra78086-caballito-de-mar"
          target="_blank"
        >
          <img
            className="logo-alternativa"
            src={require("./images/alternativaLogo.png")}
            alt="Alternativa Teatral"
          />
        </a>
        <a href="https://www.instagram.com/nunteatrobar/" target="_blank">
          <img src={require("./images/logonun.png")} alt="Nun Teatro bar" />
        </a>
      </div>
    </div>
  );
}

export default App;
