import React from "react";
import Post from "./Post";

const List = ({ title, posts }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  </div>
);

export default List;
