import React from "react";

function MovieElement() {
  return (
    <div className="w-25 p-2">
      <div className="card">
        <img
          alt="film"
          src="https://www.plansamericains.com/wp-content/uploads/Gladiator-affiche-1.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">GLADIATOR</h5>
          <p className="card-text">
            Le général romain Maximus est le plus fidèle soutien de l'empereur
            Marc Aurèle, qu'il a conduit de victoire en victoire.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieElement;
