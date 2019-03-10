import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

const props = {
  categories: [{ value: 1, label: "One" }, { value: 1, label: "Two" }],
  onSubmit: jest.fn()
};

describe("Form", () => {
  beforeEach(() => {
    props.onSubmit = jest.fn();
  });

  describe("Render", () => {
    it("should render correctly", () => {
      const wrapper = shallow(<Form {...props} />);

      expect(wrapper).toMatchSnapshot();
    });

    it("should be readonly if on disabledFields", () => {
      const disabledFields = ["author"];
      const wrapper = shallow(
        <Form {...props} disabledFields={disabledFields} />
      );

      const iAuthor = wrapper.find("Input").last();

      expect(iAuthor.props()).toMatchObject({ readOnly: true });
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

    it("should change state when changing select", () => {
      const wrapper = shallow(<Form {...props} />);

      const sSelect = wrapper.find("Select").first();
      sSelect.simulate("change", { value: 1, label: "Two" });

      expect(wrapper.state("category")).toEqual({
        value: 1,
        label: "Two"
      });
    });

    it("should change state when changing input", () => {
      const wrapper = shallow(<Form {...props} />);

      const iTitle = wrapper.find("Input").first();
      iTitle.simulate("change", {
        target: { name: "title", value: "This Title" }
      });

      expect(wrapper.state("title")).toEqual("This Title");
    });

    it("should change state when changing textarea", () => {
      const wrapper = shallow(<Form {...props} />);

      const tBody = wrapper.find("Textarea");
      tBody.simulate("change", {
        target: { name: "body", value: "This Body" }
      });

      expect(wrapper.state("body")).toEqual("This Body");
    });
  });
});
