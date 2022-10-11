import React from "react";
import FavoriList from "./components/FavoriList/FavoriList";

function Favoris({ favoris, removeFavori }) {
  return (
    <div className="d-flex flex-row flex-fill pt-4 p-2">
      <FavoriList favoris={favoris} removeFavori={removeFavori} />
    </div>
  );
}

export default Favoris;
