import React from 'react';

const TextArea = ({ label, info, children, ...props }) => {
  const inClass = `textField-input textArea-input input-large`;

  return (
    <fieldset className="textField">
      <label className="textField-label">{label}</label>
      <textarea className={inClass} {...props} />
      {info && <p className="textField-legend legend">{info}</p>}
      {children}
    </fieldset>
  );
};

export default TextArea;
