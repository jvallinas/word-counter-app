import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Result from "..";
import { EXPECTED_RESULT_ALPHABETICAL_ASCENDING } from "../../../hooks/__tests__/index.spec";

configure({ adapter: new Adapter() });

describe("Results component", () => {
  describe("when word entries are passed", () => {
    it("should render properly", () => {
      const component = shallow(
        <Result wordEntries={EXPECTED_RESULT_ALPHABETICAL_ASCENDING}></Result>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe("when no word entries are passed", () => {
    it("should render properly", () => {
      const component = shallow(<Result wordEntries={[]} />);

      expect(component).toMatchSnapshot();
    });
  });
});
