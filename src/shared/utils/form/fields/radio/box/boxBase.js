import React from 'react';

import Button from 'Button';
import withSwitch from 'WithSwitch';

const BoxBasic = ({
  info,
  children,
  start,
  stop,
  toggleSwitch,
  on,
  ...props
}) => {
  const onClick = e => {
    start();
    props.onChange && props.onChange(e);
    props.onClick && props.onClick(e);
  };
  const className = props.checked ? "ui-btn tertiaryButton radioBtnField-input checked" : "ui-btn tertiaryButton radioBtnField-input"
  return (
    <fieldset className="radioBtnField" onClick={onClick}>
      <button
        {...props}
        checked={on}
        className={className}
        type="input"
      >
        {props.label}
      </button>
      {info && <p className="radioBtnField-legend legend">{info}</p>}
      {children}
    </fieldset>
  );
};

export default withSwitch(BoxBasic);
