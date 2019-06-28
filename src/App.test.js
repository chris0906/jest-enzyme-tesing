import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "./../utilities";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  //   console.log(wrapper.debug());
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text"
        },
        {
          title: "Example title 1",
          body: "Some text"
        },
        {
          title: "Example title 1",
          body: "Some text"
        }
      ]
    };
    wrapper = setUp(initialState);
  });
  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updatesState Method should update state as expected", () => {
    const classInstance = wrapper.instance(); //get the class of that component
    classInstance.exampleMethod_updatesState(); //invoke the method in the class
    const newState = classInstance.state.hideBtn; //get the state of the hideBtn
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnAValue Method should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnAValue(6);
    expect(newValue).toBe(7);
  });
});
