import React from "react";
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

export default List;
