import "enzyme-matchers";
import "jasmine-expect";
import "jest-enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });
