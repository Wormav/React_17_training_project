import React from "react";
import Loading from "../../components/Utils/Loading";
import FavoriList from "./components/FavoriList/FavoriList";

function Favoris({ favoris, removeFavori, loaded }) {
  return (
    <div className="d-flex flex-row flex-fill pt-4 p-2">
      {loaded ? (
        <FavoriList favoris={favoris} removeFavori={removeFavori} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Favoris;
