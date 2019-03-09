import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

const props = {
  categories: [{ value: 1, label: "One" }, { value: 1, label: "Two" }],
  onSubmit: jest.fn()
};

describe("New Post", () => {
  beforeEach(() => {
    props.onSubmit = jest.fn();
  });

  describe("Render", () => {
    it("should render correctly", () => {
      const wrapper = shallow(<Form {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("Operations", () => {
    it("validate if button change state after filling data", () => {
      const wrapper = shallow(<Form {...props} />);

      const iTitle = wrapper.find("Input").first();
      iTitle.simulate("change", {
        target: { name: "title", value: "This Title" }
      });
      const sSelect = wrapper.find("Select").first();
      sSelect.simulate("change", { value: 1, label: "Two" });
      const tBody = wrapper.find("Textarea");
      tBody.simulate("change", {
        target: { name: "body", value: "This Body" }
      });
      const iAuthor = wrapper.find("Input").last();
      iAuthor.simulate("change", {
        target: { name: "author", value: "This Author" }
      });

      const button = wrapper.find("Button").last();
      expect(button.props()).toMatchObject({ disabled: false });
    });
  });
});
