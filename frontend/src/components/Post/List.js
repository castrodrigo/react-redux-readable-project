import React from "react";
import Post from "../../containers/Post";

const List = ({ title, postIds }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {postIds.map(id => (
        <li key={id}>
          <Post id={id} />
        </li>
      ))}
    </ul>
  </div>
);

export default List;
