import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TextArea from "..";

configure({ adapter: new Adapter() });

describe("TextArea component", () => {
  it("should render properly", () => {
    const component = shallow(
      <TextArea currentInput={"mockText"} onChangeHandler={() => {}} />
    );

    expect(component).toMatchSnapshot();
  });
});
