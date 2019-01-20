import React from "react";
import { shallow } from "enzyme";
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/Home";
import Photo from "../pages/Photo";
import Header from "../presentational/Header";
import App from "./";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders a Header", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it("provides a `react-router` <Switch> with pages to render", () => {
    const routes = wrapper.find(Route);

    expect(routes.at(0).prop("component")).toBe(Home);
    expect(routes.at(0).prop("path")).toBe("/");
    expect(routes.at(1).prop("component")).toBe(Photo);
    expect(routes.at(1).prop("path")).toBe("/photo/:id");
  });

  it("will redirect home if a page is not found", () => {
    expect(wrapper.find(Redirect).prop("to")).toBe("/");
  });
});
