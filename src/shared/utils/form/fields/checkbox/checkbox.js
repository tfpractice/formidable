import React from 'react';
import CheckBase from './base';

const CheckBox = ({
  input,
  className,
  meta: { touched, error, warning },
  ...rest
}) => (
  <div className={`checkField ${className} ${error && 'error'}`}>
    <CheckBase {...input} {...rest}>
      {touched &&
        ((error && <p className="checkField-error error"> {error}</p>) ||
          (warning && <p className="checkField-legend legend">{warning}</p>))}
    </CheckBase>
  </div>
);

export default CheckBox;
