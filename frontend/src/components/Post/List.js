import React from "react";
import Post from "../../containers/Post/Post";

const List = ({ title, postIds }) => (
  <div>
    <h3>{title}</h3>
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
