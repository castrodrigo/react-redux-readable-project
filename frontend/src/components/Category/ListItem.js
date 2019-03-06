import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListItem = ({ category: { path, name } }) => (
  <Link to={`/${path}`}>{name}</Link>
);

ListItem.propTypes = {
  category: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string
  })
};

export default ListItem;
