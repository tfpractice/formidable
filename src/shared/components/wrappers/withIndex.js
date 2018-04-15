import React, { Component } from "react";
import { compose, withHandlers, withProps, withState } from "recompose";

const ixState = withState(`index`, `setIx`, ({ index }) => index || 0);

const nextState = withProps(({ index, children }) => ({
  next: index < children.length - 1,
  prev: index > 0,
}));

const ixHandlers = withHandlers({
  setIndex: ({ setIx, children }) => ix => setIx(() => ix % children.length),
  incIndex: ({ setIx, children: c }) => () => setIx(x => (x + 1) % c.length),
  decIndex: ({ setIx, children: c }) => () => setIx(x => (x - 1) % c.length),
});

export default compose(ixState, ixHandlers, nextState);

const WithIndexManual = Base =>
  class extends Component {
    constructor(props) {
      super(props);
      this.advance = this.advance.bind(this);
      this.goBack = this.goBack.bind(this);
      this.setIndex = this.setIndex.bind(this);
      this.state = { index: props.index || 0 };
    }

    setIndex(ix) {
      const { children } = this.props;

      this.setState({ index: ix % children.length });
    }

    advance() {
      const { children } = this.props;

      const { index } = this.state;

      this.setState({ index: (index + 1) % children.length });
    }

    goBack() {
      const { children } = this.props;

      const { index } = this.state;

      this.setState({ index: (index - 1) % children.length });
    }
    render() {
      const { index } = this.state;

      const { children } = this.props;

      const { goBack, advance, setIndex } = this;

      const hasNext = index < children.length - 1;

      const hasPrev = index > 0;

      const through = {
        goBack,
        advance,
        setIndex,
        index,
        hasNext,
        hasPrev,
      };

      return <Base {...this.props} {...through} />;
    }
  };
