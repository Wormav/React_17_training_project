import React from "react";

function Loading() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-row justify-content-center align-items-center w-100"
    >
      <img
        alt="loading gif"
        src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
      />
    </div>
  );
}

export default Loading;
