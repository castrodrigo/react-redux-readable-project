import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ category: { path, name } }) => (
  <Link to={`/${path}`}>{name}</Link>
);

export default ListItem;
