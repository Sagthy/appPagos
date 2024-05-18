// eslint-disable-next-line no-redeclare
/* global localStorage */
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Mes } from "./components/Mes";

import payments from "./constants/payments.constants";

import "./styles/App.css";
import "react-datepicker/dist/react-datepicker.css";

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const App = () => {
  const [indiceInicio, setIndiceInicio] = useState(
    new Date().getMonth() - 1 < 0 ? 0 : new Date().getMonth() - 1
  );

  const showedMonths = meses.slice(indiceInicio, indiceInicio + 3);

  const handleNextClick = () => {
    if (indiceInicio + 1 < meses.length - 2) {
      setIndiceInicio(indiceInicio + 1);
    }
  };

  const handlePreviousClick = () => {
    if (indiceInicio - 1 >= 0) {
      setIndiceInicio(indiceInicio - 1);
    }
  };

  const handleResetClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <main>
      <h1>
        PAGOS PENDIENTES
        <br />
        💸💸💸💸
        <br />
      </h1>
      <div className="buttonContainer">
        <button className="myButton" onClick={handlePreviousClick}>
          Anterior
        </button>
        <button className="myButton" onClick={handleNextClick}>
          Siguiente
        </button>
      </div>
      <section className="mesesYPagos">
        {showedMonths.map((mes) => (
          <Mes key={mes} mes={mes} pagos={payments} />
        ))}
      </section>
      <div className="buttonContainer">
        <button className="myButton-reset" onClick={handleResetClick}>
          Reset
        </button>
      </div>
      <div className="absolute" />
    </main>
  );
};

export default App;
