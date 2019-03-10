import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formatTimestamp } from "../../util/date";
import Vote from "../Vote";

const CommentWrapper = styled.div`
  background: #d1ccce;
  padding: 0.75em;
  color: #001936;
  width: 90%;
`;

const DetailSection = styled.section`
  font-size: 0.75em;
  > span,
  > button {
    font-weight: bold;
  }
  > button {
    color: #001936;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  margin: 20px 0;
`;

const DataWrapper = styled.div`
  display: flex;
  border: 1px solid #d1ccce;
`;

const Comment = ({ comment: { timestamp, body, author, voteScore } }) => (
  <DataWrapper>
    <CommentWrapper>
      <DetailSection>
        Commented in <span>{formatTimestamp(timestamp)}</span> by{" "}
        <span>{author}</span>
      </DetailSection>
      <ContentWrapper>{body}</ContentWrapper>
    </CommentWrapper>
    <Vote score={voteScore} />
  </DataWrapper>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired
  }).isRequired
};

export default Comment;
