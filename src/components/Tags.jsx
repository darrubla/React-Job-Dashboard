import React from "react";

import "../assets/styles/components/Tags.scss";

const Tags = ({ tag }) => {
  console.log("Esto es un prueba ", tag);
  return <h3>{tag}</h3>;
};

export default Tags;
