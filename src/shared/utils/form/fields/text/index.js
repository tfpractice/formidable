import React from 'react';

import TextBase from './base';

const TextField = ({
  input,
  className,
  meta: { touched, error, warning },
  ...rest
}) => (
  <div className={`textField ${className} ${touched && error ? 'error' : ''}`}>
    <TextBase {...input} {...rest}>
      {touched &&
        ((error && <p className="textField-error error"> {error}</p>) ||
          (warning && <p className="textField-legend legend">{warning}</p>))}
    </TextBase>
  </div>
);

export { TextBase };
export default TextField;
