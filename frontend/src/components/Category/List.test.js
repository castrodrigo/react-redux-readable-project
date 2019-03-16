import React from "react";
import { shallow } from "enzyme";
import List from "./List";
import categoryIds from "../__mockData__/categoryIds";

const title = "Test List";

describe("List Render", () => {
  it("Should render categories", () => {
    const wrapper = shallow(<List title={title} categories={categoryIds} />);

    expect(wrapper).toMatchSnapshot();
  });
});
