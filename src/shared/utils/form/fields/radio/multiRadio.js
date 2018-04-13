import React from 'react';
import { Field } from 'redux-form';

import Radio from 'RadioBtn';

const MultiRadio = props => (
  <fieldset className="radioField">
    <label className="textField-label noTransform radioField-label">
      {props.label}
    </label>
    <section className="radioField">
      {props.responses.map(r => (
        <Field
          key={r}
          label={r}
          type="radio"
          component={Radio}
          name={props.name}
          value={r}
        />
      ))}
    </section>
  </fieldset>
);

export default MultiRadio;
