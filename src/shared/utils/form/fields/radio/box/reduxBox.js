import React from 'react';

import RadioBoxBase from './boxBase';

const RadioBox = ({
  input,
  className,
  meta: { touched, error, warning },
  ...rest
}) => (
  <fieldset className={`radioBtnField ${className} ${error && 'error'}`}>
    <RadioBoxBase {...rest} {...input}>
      {touched &&
        ((error && <p className="radioBtnField-error error"> {error}</p>) ||
          (warning && (
            <p className="radioBtnField-legend legend">{warning}</p>
          )))}
    </RadioBoxBase>
  </fieldset>
);

export default RadioBox;
