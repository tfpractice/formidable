import React from 'react';

const SelectBase = ({ label, info, children, ...props }) => (
  <fieldset className="selectList ">
    <label className="selectList-label  ">{label}</label>
    <select className="selectList-input   input-large" {...props}>
      {children}
    </select>
    {info && (
      <p className="selectList-legend textField-legend legend">{info}</p>
    )}
  </fieldset>
);

export default SelectBase;
