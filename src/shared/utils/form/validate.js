const mailRegex = /^\w+([.%+-]?\w+)*@\w+([.%+-]?\w+)*(\.\w{2,3})+$/;

const phoneRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;

export const required = value => (value ? undefined : `Required`);

export const isEmail = val => !mailRegex.test(val) && `invalid email`;

export const isPhone = val => !phoneRegex.test(val) && `invalid phone`;

export const formatPhone = rawPhoneNumber => {
  let digitString = `${rawPhoneNumber}`.replace(/\D/g, ``);

  if (digitString.length === 11) {
    digitString = digitString.substring(1, 11);
  }
  return `${digitString.substring(0, 3)}-${digitString.substring(
    3,
    6
  )}-${digitString.substring(6, 10)}`;
};

export const isTouched = (val, all, props) => props.anyTouched || undefined;

export const valTouched = (val, all, props) =>
  props.anyTouched ? isPhone(val) : undefined;
