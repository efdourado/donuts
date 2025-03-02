import React, { useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/duduspizzeria";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Bem-vindo à Dudu's Pizzeria!</h1>
        <p className="description">
          A melhor pizza feita com amor e ingredientes frescos.
        </p>
        <div className="cta">
          <button
            className="order-now"
            onClick={() => {
              window.location.href = "/duduspizzeria";
            }}
          >
            Peça Agora!
          </button>
        </div>
      </div>
      <div className="footer">
        <p>Feito com ♥ por Dudu's Pizzeria</p>
      </div>
    </div>
  );
};

export default HomePage;