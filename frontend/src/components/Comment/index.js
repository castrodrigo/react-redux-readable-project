import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
  background: #d1ccce;
  padding: 0.75em;
  color: #001936;
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
  <CommentWrapper>
    <DetailSection>
      Commented in <span>{timestamp}</span> by <span>{author}</span>
    </DetailSection>
    <ContentWrapper>{body}</ContentWrapper>
    <section>score: {voteScore}</section>
  </CommentWrapper>
);

export default Comment;
