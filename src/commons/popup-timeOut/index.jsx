import React from "react";
import { useNavigate } from "react-router";

const PopupTimeOut = () => {
  const navigate = useNavigate();

  return (
    <div className="fake-container-popup-time fake-container-popup-time-inactive">
      <div className="popup-time-container">
        <div className="popup-time-content-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 3.5H18C19.3807 3.5 20.5 4.61929 20.5 6V18C20.5 19.3807 19.3807 20.5 18 20.5H6C4.61929 20.5 3.5 19.3807 3.5 18V6C3.5 4.61929 4.61929 3.5 6 3.5ZM2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM16.1719 9L11.25 13.9219L8.57812 11.25C8.28041 10.9523 7.79772 10.9523 7.5 11.25C7.20228 11.5477 7.20228 12.0304 7.5 12.3281L10.7109 15.5391C11.0125 15.8275 11.4875 15.8275 11.7891 15.5391L17.25 10.0781C17.5477 9.78041 17.5477 9.29772 17.25 9C16.9523 8.70228 16.4696 8.70228 16.1719 9Z"
              fill="green"
            />
          </svg>
          <h1 className="h1-popup-time-text">Se acabo el tiempo</h1>
          <p className="p-popup-time-text">
            Puede presionar el boton continuar para refrescar la pagina y volver
            a realizar la reserva
          </p>
          <button
            className="popup-time-button"
            onClick={() => window.location.reload()}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupTimeOut;