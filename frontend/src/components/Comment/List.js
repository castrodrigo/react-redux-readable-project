import React from "react";
import styled from "styled-components";
import Comment from "../../containers/Comment";

const ListItem = styled.li`
  margin-bottom: 0.75em;
`;

const List = ({ title, commentIds, postId }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {commentIds &&
        commentIds.map(id => (
          <ListItem key={id}>
            <Comment id={id} postId={postId} />
          </ListItem>
        ))}
    </ul>
  </div>
);

export default List;
