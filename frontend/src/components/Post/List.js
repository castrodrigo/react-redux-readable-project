import React from "react";
import styled from "styled-components";
import Post from "../../containers/Post/Post";

const ListItem = styled.li`
  margin-bottom: 0.75em;
`;

const List = ({ title, postIds }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {postIds.map(id => (
        <ListItem key={id}>
          <Post id={id} />
        </ListItem>
      ))}
    </ul>
  </div>
);

export default List;
