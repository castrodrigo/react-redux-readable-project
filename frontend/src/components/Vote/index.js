import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  background: #d1ccce;
  justify-content: space-evenly;
  text-align: center;
  box-size: border-box;
  padding: 0.5em;
  border-left: 1px solid #d1ccce;
  & button {
    font-size: 18px;
    padding: 0px;
    background: none;
    border: 0;
    cursor: pointer;
  }
  & button:first-child {
    color: #007544;
  }
  & button:last-child {
    margin-top: 4px;
    color: #750000;
  }
  & span {
    background: white;
    padding: 4px;
    display: block;
    color: #840032;
  }
`;

const Vote = ({ score, voteUp, voteDown }) => (
  <VoteWrapper>
    <button onClick={voteUp}>
      <FaThumbsUp />
    </button>
    <span>{score}</span>
    <button onClick={voteDown}>
      <FaThumbsDown />
    </button>
  </VoteWrapper>
);

Vote.propTypes = {
  score: PropTypes.number.isRequired,
  voteUp: PropTypes.func.isRequired,
  voteDow: PropTypes.func.isRequired
};

export default Vote;
