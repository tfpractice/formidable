const mailRegex = /^\w+([.%+-]?\w+)*@\w+([.%+-]?\w+)*(\.\w{2,3})+$/;

export const required = value => (value ? undefined : `Required`);

export const isEmail = val => !mailRegex.test(val) && `invalid email`;

export const isTouched = (val, all, props) => props.anyTouched || undefined;
