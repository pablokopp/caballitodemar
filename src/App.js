import "./App.css";

import { IoLogoInstagram } from "react-icons/io5";
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
          trabajo="Escenografía y Vestuario Original"
          persona={[
            {
              nombre: "Paola Delgado",
              iglink: "https://www.instagram.com/paoladelgadoarte/",
            },
          ]}
        />
        <Trabajo
          trabajo="Escenografía y Vestuario 2023"
          persona={[
            {
              nombre: "Giuliano Benedetti",
              iglink: "https://www.instagram.com/giulianobenedetti/",
            },
          ]}
        />
        <Trabajo
          trabajo="Puesta de Luces Original"
          persona={[
            {
              nombre: "Matias Sendón",
              iglink: "",
            },
          ]}
        />
        <Trabajo
          trabajo="Adaptación de Luces 2023"
          persona={[
            {
              nombre: "Juan Sebastian",
              iglink: "",
            },
          ]}
        />
        <Trabajo
          trabajo="Diseño gráfico"
          persona={[
            {
              nombre: "Rafa Casares",
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
        <h2>Si te gustó...</h2>
        <a
          href="https://www.instagram.com/caballito.laobra/"
          target="_blank"
          rel="noreferrer"
          className="seguinos-cta"
        >
          Seguinos en Instagram
          <IoLogoInstagram color="inherit" size="1.5rem" />
        </a>
        <a
          href="https://www.alternativateatral.com/obra78086-caballito-de-mar"
          target="_blank"
          rel="noreferrer"
        >
          Dejanos un mensaje
        </a>
        <a
          href="https://publico.alternativateatral.com/entradas78086-caballito-de-mar?o=14"
          target="_blank"
          rel="noreferrer"
        >
          Reserva más entradas
        </a>
      </div>
      <div className="container-logos">
        <a
          href="https://www.alternativateatral.com/obra78086-caballito-de-mar"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="logo-alternativa"
            src={require("./images/alternativaLogo.png")}
            alt="Alternativa Teatral"
          />
        </a>
        {/* <a href="https://www.instagram.com/nunteatrobar/" target="_blank">
          <img src={require("./images/logonun.png")} alt="Nun Teatro bar" />
        </a> */}
      </div>
    </div>
  );
}

export default App;
