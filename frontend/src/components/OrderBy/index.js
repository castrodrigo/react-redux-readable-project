import React from "react";
import PropTypes from "prop-types";

const OrderBy = ({ onSelect, orderBy }) => (
  <div>
    Order by:
    <select onChange={e => onSelect(e.target.value)} defaultValue={orderBy}>
      <option value="timestamp">Date</option>
      <option value="voteScore">Score</option>
    </select>
  </div>
);

OrderBy.propTypes = {
  onSelect: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired
};

export default OrderBy;
