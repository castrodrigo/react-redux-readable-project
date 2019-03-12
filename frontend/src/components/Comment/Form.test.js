import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

const props = {
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
  });

  describe("Operations", () => {
    it("validate if button change state after filling data", () => {
      const wrapper = shallow(<Form {...props} />);

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

    it("should clear form after submit", () => {
      const wrapper = shallow(<Form onSubmit={() => Promise.resolve()} />);

      const iTitle = wrapper.find("Input").first();
      iTitle.simulate("change", {
        target: { name: "title", value: "This Title" }
      });
      const tBody = wrapper.find("Textarea");
      tBody.simulate("change", {
        target: { name: "body", value: "This Body" }
      });

      wrapper
        .find("Button")
        .last()
        .simulate("click");

      expect(iTitle.props().value).toEqual("");
      expect(tBody.props().value).toEqual("");
    });
  });
});
