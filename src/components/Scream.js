import React from "react";

export const Scream = ({ scream }) => {
  return (
    <div>
      <h1>{scream.body}</h1>
      <img src={scream.imgUrl} />
    </div>
  );
};
