import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Post from "../../containers/Post/Post";

const Title = styled.h3`
  display: inline;
`;

const ListItem = styled.li`
  margin-bottom: 0.75em;
`;

const List = ({ title, postIds }) => (
  <div>
    <Title>{title}</Title>
    <ul>
      {postIds.map(id => (
        <ListItem key={id}>
          <Post id={id} />
        </ListItem>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  postIds: PropTypes.array
};

export default List;
