import React from 'react';

const CheckBase = ({ label, info, children, ...props }) => {
  console.log('props', props);
  return (
    <fieldset className="checkField row">
      <label className="checkField-label">
        <input type="checkbox" className="checkField-input" {...props} />
        {label}
      </label>
      {info && <p className="checkField-legend legend">{info}</p>}
      {children}
    </fieldset>
  );
};

export default CheckBase;
