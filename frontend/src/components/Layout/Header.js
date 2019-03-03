import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

const LinkFormat = styled(Link)`
  color: #ffffff;
`;

const LinkButton = styled(LinkFormat)`
  border: 1px solid #fff9fb;
  padding: 10px;
`;

const Header = () => (
  <Nav>
    <LinkFormat to={"/"}>
      <h1>Readable</h1>
    </LinkFormat>
    <LinkButton to={"/new"}>New Post</LinkButton>
  </Nav>
);

export default Header;
