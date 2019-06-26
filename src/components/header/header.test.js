import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utilities";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render without errors", () => {
    // console.log(component.debug()); //output the component in a html style in the console
    const wrapper = findByTestAttr(component, "headerComponent"); //returen className="headerComponent" include its children element
    expect(wrapper.length).toBe(1);
  });
  it("should render a logo", () => {
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
