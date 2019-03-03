import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    ". main main main right ."
    "footer  footer footer footer footer footer";
  grid-template-columns: 2em 1fr 1fr 1fr 1fr 2em;
  font-family: Roboto;
`;

const HeaderWrapper = styled.section`
  grid-area: header;
  background: #011936;
  & > * {
    max-width: calc(100vw - 4em);
    margin: 0 auto;
  }
`;

const Content = styled.section`
  grid-area: main;
  padding: 0 0.5em 0.5em 0;
  min-height: calc(100vh - 126px);
`;

const SidebarWrapper = styled.section`
  grid-area: right;
  background: #840032;
  padding: 0 0.75em 0.75em;
  color: #ffffff;
`;

const FooterWrapper = styled.section`
  grid-area: footer;
  background: #002642;
  height: 60px;
`;

const Layout = ({ content, sidebar }) => (
  <Wrapper>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <Content>{content}</Content>
    <SidebarWrapper>
      <Sidebar>{sidebar}</Sidebar>
    </SidebarWrapper>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </Wrapper>
);

export default Layout;
