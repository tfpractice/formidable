import React from 'react';

import SelectBase from './base';

const SelectList = ({
  input,
  className,
  children,
  meta: { touched, error, warning },
  ...rest
}) => {
  const lbClass = `selectList-label ${error && 'error'}`;

  return (
    <div className={`selectList ${className}`}>
      <SelectBase {...rest} {...input}>
        {children}
        {touched &&
          ((error && <p className="selectList-error error"> {error}</p>) ||
            (warning && <p className="selectList-legend legend">{warning}</p>))}
      </SelectBase>
    </div>
  );
};

export default SelectList;
