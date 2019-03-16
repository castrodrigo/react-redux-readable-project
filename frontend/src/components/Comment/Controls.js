import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaEdit, FaEraser } from "react-icons/fa";

const Control = styled.div`
  text-align: right;
  border-top: 1px solid #ffffff;
  padding-top: 0.75em;
  & > a {
    font-size: 16px;
    margin-right: 6px;
  }
  & > button {
    margin-left: 6px;
    font-size: 16px;
    padding: 0;
    background: 0;
    border: 0;
    cursor: pointer;
  }
  & > button:hover {
    color: #840032;
  }
`;

const Controls = ({ onEdit, onDelete }) => (
  <Control>
    <button onClick={onEdit}>
      <FaEdit />
    </button>
    <button title={`Delete Post`} onClick={onDelete}>
      <FaEraser />
    </button>
  </Control>
);

Controls.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Controls;
