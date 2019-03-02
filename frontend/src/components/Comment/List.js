import React from "react";
import Comment from "../../containers/Comment";

const List = ({ title, commentIds, postId }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {commentIds &&
        commentIds.map(id => (
          <li key={id}>
            <Comment id={id} postId={postId} />
          </li>
        ))}
    </ul>
  </div>
);

export default List;
