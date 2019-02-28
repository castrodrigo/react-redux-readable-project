import React from "react";

const Post = ({ post: { title, timestamp, author, body } }) => (
  <div>
    <h2>{title}</h2>
    <span>{timestamp}</span>
    <span>{author}</span>
    <div>{body}</div>
  </div>
);

export default Post;
