import React from "react";

const Comment = ({
  comment: {
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}) => (
  <div>
    <span>{timestamp}</span> by <span>{author}</span>
    <div>{body}</div>
    <section>score: {voteScore}</section>
  </div>
);

export default Comment;
