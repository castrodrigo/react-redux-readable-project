import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { formatTimestamp } from "../../util/date";

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

const Details = ({ timestamp, author }) => (
  <DetailSection>
    Commented in <span>{formatTimestamp(timestamp)}</span> by{" "}
    <span>{author}</span>
  </DetailSection>
);

Details.propTypes = {
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default Details;
