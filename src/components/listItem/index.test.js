import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../utilities";
import ListItem from "./index";
import { isTSAnyKeyword } from "@babel/types";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some text"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should renders without error", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
