import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "main main main main right right"
    "footer  footer footer footer footer footer";
  grid-gap: 10px;
  padding: 10px;
  font-family: Roboto;
`;

const Content = styled.section`
  grid-area: main;
`;

const Sidebar = styled.section`
  grid-area: right;
`;

const Layout = ({ content, sidebar }) => (
  <Wrapper>
    <Header />
    <Content>{content}</Content>
    <Sidebar>{sidebar}</Sidebar>
    <Footer />
  </Wrapper>
);

export default Layout;
