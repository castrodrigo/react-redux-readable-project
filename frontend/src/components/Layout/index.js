import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "${props =>
      props.sidebar ? ". main main main right ." : ". main main main main ."}"
    "footer footer footer footer footer footer";
  grid-template-columns: 2em 1fr 1fr 1fr 1fr 2em;
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
  padding: 0 0.75em 0.75em 0;
  min-height: calc(100vh - 126px);
  padding-top: 1em;
`;

const SidebarWrapper = styled.section`
  grid-area: right;
  background: #840032;
  padding: 1em 0.75em 0.75em;
`;

const FooterWrapper = styled.section`
  grid-area: footer;
  background: #002642;
  height: 60px;
`;

const Layout = ({ content, sidebar }) => (
  <Wrapper sidebar={!!sidebar}>
    <HeaderWrapper>
      <Header />
    </HeaderWrapper>
    <Content>{content}</Content>
    {sidebar && (
      <SidebarWrapper>
        <Sidebar>{sidebar}</Sidebar>
      </SidebarWrapper>
    )}
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </Wrapper>
);

Layout.propTypes = {
  content: PropTypes.node.isRequired,
  sidebar: PropTypes.node
};

export default Layout;
