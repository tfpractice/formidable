// import * from 'jest-enzyme';
import React from "react";
import { mount, render, shallow } from "enzyme";

import withIndex from "./withIndex";
import withValues from "./withValues";

describe(`withIndex`, () => {
  const MyBase = props => <div className="MyContainer" />;

  const MyContainer = withIndex(MyBase);

  const child1 = <h1 className="child1">child1</h1>;

  const child2 = <h1 className="child2">child2</h1>;

  const wrapper = shallow(
    <MyContainer>
      {child1}
      {child2}
    </MyContainer>
  );

  const mounted = mount(
    <MyContainer>
      {child1}
      {child2}
    </MyContainer>
  );

  it(`assigns an index to a component based on its number of children`, () => {
    expect(wrapper.children()).toHaveLength(2);
  });

  describe(`props`, () => {
    const props = mounted.find(MyBase).props();

    const mountBase = mounted.find(MyBase);

    it(`gives the childComponent setIx attr`, () => {
      expect(mountBase).toHaveProp(`setIx`);
    });
    it(`gives the childComponent an index attr`, () => {
      expect(mountBase).toHaveProp(`index`);
    });
    it(`has a setIndex function`, () => {
      expect(mountBase).toHaveProp(`setIndex`);
    });
    it(`has a incIndex function`, () => {
      expect(mountBase).toHaveProp(`incIndex`);
    });
    it(`has a decIndex function`, () => {
      expect(mountBase).toHaveProp(`decIndex`);
    });
    it(`has a next function`, () => {
      expect(mountBase).toHaveProp(`next`);
    });
    it(`has a prev function`, () => {
      expect(mountBase).toHaveProp(`prev`);
    });
  });
});
