const mailRegex = /^\w+([.%+-]?\w+)*@\w+([.%+-]?\w+)*(\.\w{2,3})+$/;

export const required = value => (value ? undefined : `Required`);

export const isEmail = val => !mailRegex.test(val) && `invalid email`;

export const isNum = val =>
  val && Number.isNaN(Number(val)) && `invalid weight number`;

export const isTouched = (val, all, props) => props.anyTouched || undefined;
