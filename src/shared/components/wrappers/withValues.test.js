import React from "react";
import { mount } from "enzyme";

import withValues from "./withValues";

describe(`withValues`, () => {
  const MyBase = () => <div className="myValues" />;

  const MyContainer = withValues(MyBase);

  const alpha = { first: `alpha` };

  const omega = { last: `omega` };

  const theta = { middle: `theta` };

  const mounted = mount(
    <MyContainer formVals={alpha}>
      <p>hi</p>
    </MyContainer>
  );

  const mInstance = mounted.instance();

  const mBase = mounted.find(MyBase);

  const props = mBase.props();

  const mRender = () => mInstance.render();

  const getProps = () => mRender().props;

  describe(`props`, () => {
    it(`gives the component a formVals prop`, () => {
      expect(mBase).toHaveProp(`formVals`);
    });
    it(`gives the component a updateVals prop`, () => {
      expect(mBase).toHaveProp(`updateVals`);
    });
    it(`gives the component a setValues prop`, () => {
      expect(mBase).toHaveProp(`setValues`);
    });
  });

  describe(`updateVals`, () => {
    describe(`when given an object`, () => {
      it(`replaces the new values with the old ones`, () => {
        props.updateVals(omega);
        expect(getProps().formVals).toMatchObject(omega);
        expect(getProps().formVals).not.toMatchObject(alpha);
      });
    });
  });
  describe(`setValues`, () => {
    describe(`when given an object`, () => {
      it(`merges the new values with the previous ones`, () => {
        props.setValues(theta);
        expect(getProps().formVals).toMatchObject(theta);
      });
    });
  });
});
