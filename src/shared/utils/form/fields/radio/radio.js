import React from 'react';

const RadioBtn = ({
  input,
  label,
  type,
  info,
  className,
  meta: { touched, error, warning },
  ...rest
}) => {
  const lbClass = `radioBtn-label ${error && 'error'}`;
  const inClass = `radioBtn-input input-large ${error && 'error'}`;

  return (
    <div {...rest} className={`radioBtn ${className}`}>
      <label className={lbClass}>{label}</label>
      <input className={inClass} type="radio" placeholder={label} {...input} />
      {info && <p className="radioBtn-legend legend">{info}</p>}
      {touched &&
        ((error && <p className="radioBtn-error error"> {error}</p>) ||
          (warning && <p className="radioBtn-legend legend">{warning}</p>))}
    </div>
  );
};

export default RadioBtn;
