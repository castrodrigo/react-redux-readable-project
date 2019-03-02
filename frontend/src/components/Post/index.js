import React from "react";
import { Link } from "react-router-dom";

const Post = ({
  post: {
    id,
    title,
    timestamp,
    author,
    body,
    category,
    commentCount,
    voteScore
  }
}) => (
  <Link to={`/${category}/${id}`}>
    <h2>{title}</h2>
    <span>{category}</span> | <span>{timestamp}</span> | <span>{author}</span>
    <div>{body}</div>
    <section>
      ({commentCount}) comments | score: {voteScore}
    </section>
  </Link>
);

export default Post;
