import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

test("Render Header Components", () => {
  render(<Footer />);
  expect(screen.getByTestId("App Download Banner"));
  expect(screen.getByTestId("footer links"));
  expect(screen.getByTestId("footer menu"));
  expect(screen.getByTestId("footer copyright"));
});

// check footer elements length
configure({ adapter: new Adapter() });
describe("Check Footer Children numbers", () => {
  const wrapper = mount(<Footer />);

  test("Check footer children lengths", () => {
    render(<Footer />);
    expect(wrapper.find("footer").children()).toHaveLength(4);
  });

  test("Check Footer Banner length", () => {
    render(<Footer />);
    expect(wrapper.find(".download-app-banner").children()).toHaveLength(3);
  });

  test("Check Footer Links length", () => {
    render(<Footer />);
    expect(wrapper.find(".footer-links").children()).toHaveLength(8);
  });

  test("Check Footer Menu length", () => {
    render(<Footer />);
    expect(wrapper.find(".footer-menu").children()).toHaveLength(2);
  });

  test("Check Footer Copyright length", () => {
    render(<Footer />);
    expect(wrapper.find(".footer-copyright").children()).toHaveLength(2);
  });
});
