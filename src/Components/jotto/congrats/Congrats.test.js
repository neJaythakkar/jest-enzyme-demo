import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkForPropTypes } from "../../../test/util";
import CongratsComponent from "./index";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<CongratsComponent {...setupProps} />);
};

describe("Congrats Component", () => {

  it("should render without errors", () => {
    const wrapper = setup({
      success: true,
    });
    const wrapperElement = findByTestAttr({
      wrapper,
      attrVal: "jotto-congrats-component",
    });
    expect(wrapperElement.length).toBe(1);
  });

  it("renders no text when `success` props is false", () => {
    const wrapper = setup({
      success: false,
    });
    const wrapperElement = findByTestAttr({
      wrapper,
      attrVal: "jotto-congrats-component",
    });
    expect(wrapperElement.length).toBe(0);
  });

  it("renders non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup({
      success: true,
    });
    const congratsMessage = findByTestAttr({
      wrapper,
      attrVal: "jotto-congrats-component-congrats-message",
    });
    expect(congratsMessage.text().length).not.toBe(0);
  });

  it("should not throw warning with expected props", () => {
    const expectedProps = { success: false };
    const propError = checkForPropTypes({
      component: CongratsComponent,
      expectedProps,
    });
    expect(propError).toBeUndefined();
  });

});
