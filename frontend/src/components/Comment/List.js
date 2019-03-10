import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Comment from "../../containers/Comment";

const ListItem = styled.li`
  margin-bottom: 0.75em;
`;

const List = ({ title, commentIds, postId }) => (
  <div>
    <h3>{title}</h3>
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

List.propTypes = {
  title: PropTypes.string,
  commentIds: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default List;
