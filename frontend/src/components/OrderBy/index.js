import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OrderByWrapper = styled.div`
  font-size: 14px;
  float: right;
  & > select {
    margin-left: 8px;
  }
`;

const OrderBy = ({ onSelect, orderBy }) => (
  <OrderByWrapper>
    Order by:
    <select onChange={e => onSelect(e.target.value)} defaultValue={orderBy}>
      <option value="timestamp">Date</option>
      <option value="voteScore">Score</option>
      <option value="author">Author</option>
    </select>
  </OrderByWrapper>
);

OrderBy.propTypes = {
  onSelect: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired
};

export default OrderBy;
