import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { formatTimestamp } from "../../util/date";

const PostWrapper = styled.div`
  border: 1px solid #d1ccce;
  padding: 0.75em;
  color: #001936;
`;

const Title = styled.h2`
  margin: 0 0 4px;
`;

const DetailSection = styled.section`
  font-size: 0.75em;
  color: #8e8b8c;
  > span,
  > a {
    font-weight: bold;
  }
  > a {
    color: #001936;
  }
`;

const ContentWrapper = styled.div`
  margin: 20px 0;
`;

const CommentSection = styled.section`
  border-top: 1px solid #d1ccce;
  padding-top: 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
    <PostWrapper>
      <Title>{title}</Title>
      <DetailSection>
        Published in <span>{formatTimestamp(timestamp)}</span> by{" "}
        <span>{author}</span>, in <Link to={`/${category}`}>{category}</Link>
      </DetailSection>
      <ContentWrapper>{body}</ContentWrapper>
      <CommentSection>
        <span>
          <FaComments /> ({commentCount})
        </span>
        <span>score: {voteScore}</span>
      </CommentSection>
    </PostWrapper>
  </Link>
);

export default Post;
