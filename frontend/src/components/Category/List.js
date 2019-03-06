import React from "react";
import PropTypes from "prop-types";
import Category from "../../containers/Category";

const List = ({ title, categories }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {categories.map(path => (
        <li key={path}>
          <Category path={path} />
        </li>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
};

export default List;
