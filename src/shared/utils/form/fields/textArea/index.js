import React from 'react';
import TextAreaBase from './base';

const TextField = ({
  input,
  className,
  meta: { touched, error, warning },
  ...rest
}) => {
  const lbClass = `textField-label ${error && 'error'}`;
  const inClass = `textField-input input-large ${error && 'error'}`;

  return (
    <div {...rest} className={`textField ${className}`}>
      <TextAreaBase className={inClass} {...input} {...rest} />
      {touched &&
        ((error && <p className="textField-error error"> {error}</p>) ||
          (warning && <p className="textField-legend legend">{warning}</p>))}
    </div>
  );
};

export default TextField;
