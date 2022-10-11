import React from "react";
import FavoriElement from "./FavoriElement/FavoriElement";

function FavoriList({ favoris, removeFavori }) {
  console.log(favoris);
  return (
    <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
      {favoris?.map((f, index) => (
        <FavoriElement
          key={f.title + index}
          favoris={f}
          removeFavori={removeFavori}
        />
      ))}
    </div>
  );
}

export default FavoriList;
