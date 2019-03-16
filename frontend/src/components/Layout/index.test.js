import React from "react";
import { shallow } from "enzyme";
import Layout from "./";
import Sidebar from "./Sidebar";

const sidebar = (
  <ul>
    <li>Item</li>
  </ul>
);

const content = <div>Content</div>;

describe("Layout Render", () => {
  it("Should render correctly", () => {
    const wrapper = shallow(<Layout content={content} sidebar={sidebar} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("Should render sidebar if receives data", () => {
    const wrapper = shallow(<Layout content={content} sidebar={sidebar} />);

    const sidebarCopmonent = wrapper.find("SidebarWrapper");

    expect(sidebarCopmonent.length).toBe(1);
  });

  it("Should not render sidebar if does not receive data", () => {
    const wrapper = shallow(<Layout content={content} />);

    const sidebarCopmonent = wrapper.find("SidebarWrapper");

    expect(sidebarCopmonent.length).toBe(0);
  });

  describe("Data Loading", () => {
    it("Should match content", () => {
      const wrapper = shallow(<Layout content={content} />);

      const contentCopmonent = wrapper.find("Content");

      expect(contentCopmonent.props().children).toEqual(content);
    });
  });

  it("Should match sidebar", () => {
    const wrapper = shallow(<Layout content={content} sidebar={sidebar} />);

    const sidebarCopmonent = wrapper.find(Sidebar);

    expect(sidebarCopmonent.props().children).toEqual(sidebar);
  });
});
