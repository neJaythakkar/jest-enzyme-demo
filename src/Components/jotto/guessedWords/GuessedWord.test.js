import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkForPropTypes } from "../../../test/util";

import GuessedWords from "./index";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe("GuessedWords Component", () => {
  describe("checking proptypes", () => {
    it("should not throw warning with expected props", () => {
      const propErrors = checkForPropTypes({
        component: GuessedWords,
        expectedProps: defaultProps,
      });
      expect(propErrors).toBeUndefined();
    });
  });

  it("should render without error", () => {});
});
