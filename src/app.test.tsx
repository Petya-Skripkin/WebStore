import React from "react";
import { shallow } from "enzyme";
import App from "./app";

describe("App", () => {
  it("Страница должна отрендериться", () => {
    shallow(<App />);
  });
});
