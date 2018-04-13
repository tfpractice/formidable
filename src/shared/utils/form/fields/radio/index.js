import React from 'react';
import RadioBase from './base';

const RadioBtn = ({
  input,
  className,
  meta: { touched, error, warning },
  ...rest
}) => (
  <div className={`radioField ${className} ${error && 'error'}`}>
    <RadioBase {...input} {...rest}>
      {touched &&
        ((error && <p className="radioField-error error"> {error}</p>) ||
          (warning && <p className="radioField-legend legend">{warning}</p>))}
    </RadioBase>
  </div>
);

export default RadioBtn;
