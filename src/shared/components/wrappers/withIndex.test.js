import React from "react";
import { mount, shallow } from "enzyme";

import withIndex from "./withIndex";

describe(`withIndex`, () => {
  const MyBase = ({ decIndex, setIndex, incIndex, children }) => (
    <div className="MyContainer">
      <button onClick={() => setIndex(5)} className="btn1">
        btn1
      </button>
      <button onClick={decIndex} className="btn2">
        btn2
      </button>
      <button onClick={incIndex} className="btn3">
        btn3
      </button>
      {children}
    </div>
  );

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
      <button className="child1">child1</button>
      <button className="child1">child1</button>
      <button className="child1">child1</button>
    </MyContainer>
  );

  const mInstance = mounted.instance();

  const mRender = () => mInstance.render();

  const rProps = () => mRender().props;

  const b1 = mounted.find(`.btn1`);

  const b2 = mounted.find(`.btn2`);

  const b3 = mounted.find(`.btn3`);

  const mBase = mounted.find(MyBase);

  const props = mBase.props();

  it(`assigns an index to a component based on its number of children`, () => {
    expect(wrapper.children()).toHaveLength(2);
  });

  describe(`props`, () => {
    it(`gives the childComponent setIx attr`, () => {
      expect(mBase).toHaveProp(`setIx`);
      expect(props.setIx).toBeFunction();
    });
    it(`gives the childComponent an index attr`, () => {
      expect(mBase).toHaveProp(`index`);
      expect(props.index).toBeNumber(0);
    });
    it(`has a setIndex function`, () => {
      expect(mBase).toHaveProp(`setIndex`);
      expect(props.setIndex).toBeFunction();
    });
    it(`has a incIndex function`, () => {
      expect(mBase).toHaveProp(`incIndex`);
      expect(props.incIndex).toBeFunction();
    });
    it(`has a decIndex function`, () => {
      expect(mBase).toHaveProp(`decIndex`);
      expect(props.decIndex).toBeFunction();
    });
    it(`has a next function`, () => {
      expect(mBase).toHaveProp(`next`);
    });
    it(`has a prev function`, () => {
      expect(mBase).toHaveProp(`prev`);
    });
  });

  describe(`setIx`, () => {
    describe(`when given a number`, () => {
      it(`setsThe Index state value to the modulo of the number of children`, () => {
        props.setIndex(1);
        expect(mInstance.render().props.index).toEqual(1);
      });
      it(`setsThe Index state value to the modulo of the number of children`, () => {
        props.setIndex(13);
        expect(mInstance.render().props.index).toEqual(
          13 % props.children.length
        );
      });
    });
    describe(`decIndex`, () => {
      describe(`when index is at zero`, () => {
        it(`does nothing`, () => {
          props.setIndex(0);
          props.decIndex();
          expect(rProps().index).toEqual(0);
        });
      });
      describe(`when x is posoitiove `, () => {
        it(`decrements the index stateValue`, () => {
          props.setIndex(2);
          const initIndex = rProps().index;

          props.decIndex();
          expect(rProps().index).toEqual(initIndex - 1);
        });
      });
    });
  });
});
