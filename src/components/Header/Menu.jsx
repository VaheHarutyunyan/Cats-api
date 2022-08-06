import React from "react";

const Menu = ({name, onClick}) => {
  return <li onClick={onClick}>{name}</li>;
};

export default Menu;
