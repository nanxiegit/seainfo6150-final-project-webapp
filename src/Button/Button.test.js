import React from "react";
import Button from "./Button";

describe("Button tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Button  buttonText={ "sip off" } onClick={() => {}} 
    />);
    expect(container).toMatchSnapshot();
  });
});