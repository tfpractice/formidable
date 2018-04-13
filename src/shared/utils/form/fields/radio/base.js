import React from 'react';

const RadioBase = ({ label, info, children, ...props }) => (
  <fieldset className="radioField row">
    <label className="radioField-label">
      <input type="radio" className="radioField-input" {...props} />
      {label}
    </label>
    {info && <p className="radioField-legend legend">{info}</p>}
    {children}
  </fieldset>
);

export default RadioBase;
