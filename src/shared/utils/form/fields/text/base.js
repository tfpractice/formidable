import React from 'react';

const TextBase = ({ name, info, children, label, ...props }) => (
  <fieldset className="textField">
    {label && <label className="textField-label">{label}</label>}
    <input className="textField-input input-large" {...props} />
    {info && <p className="textField-legend legend">{info}</p>}
    {children}
  </fieldset>
);

export default TextBase;
