import React from "react";

const style = {
  width: "300px",
  height: "200px",
  overflow: "hidden",
  margin: "0px 5px 10px 5px",
  cursor: "pointer",
};

function FavoriElement({ favoris, removeFavori }) {
  return (
    <div style={style} className="d-flex flex-row bg-light">
      <img width="185" alt="film" src={favoris.img} />
      <div className="flex-fill d-flex flex-column p-3">
        <h5>{favoris.title}</h5>
        <hr className="w-100" />
        <span className="flex-fill">{favoris.details}</span>
        <div className="d-flex flex-row justify-content-end">
          <button
            onClick={() => {
              removeFavori(favoris.title);
            }}
            className="btn btn-small btn-danger"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriElement;
