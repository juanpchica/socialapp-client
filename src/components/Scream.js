import React from "react";

export const Scream = ({ scream }) => {
  console.log(userImage);
  return (
    <div>
      <h1>{scream.body}</h1>
      <img src={scream.userImage} />
    </div>
  );
};
