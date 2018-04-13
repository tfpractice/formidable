import uid from "uid";

export const user = (
  firstName = `firstName`,
  lastName = `lastName`,
  email = `valid@email.com`,
  ageGroup = `1`,
  height = 100,
  color = `Blue`,
  id = uid()
) => ({
  firstName,
  lastName,
  email,
  ageGroup,
  height,
  color,
  id,
});

export const firstName = ({ firstName } = user()) => firstName;

export const lastName = ({ lastName } = user()) => lastName;

export const email = ({ email } = user()) => email;

export const age = ({ age } = user()) => age;

export const height = ({ height } = user()) => height;

export const weight = ({ weight } = user()) => weight;

export const id = ({ id } = user()) => id;

export const sameID = p0 => p1 => id(p0) == id(p1);

export const diffID = p0 => p1 => !sameID(p0)(p1);

export const update = (next = user()) => (orig = user()) => ({
  ...orig,
  ...next,
});

export const setId = id => orig => update({ id })(orig);

export const updateById = nxt => orig =>
  sameID(nxt)(orig) ? update(nxt)(orig) : orig;

export const idSet = (users = []) => new Set(users.map(id));

export const hasUser = (nxt = user()) => users => idSet(users).has(id(nxt));

export const xHasUser = (nxt = user()) => users => !hasUser(nxt)(users);

export const appendUser = nxt => users => users.concat(nxt);

export const addUser = nxt => users =>
  hasUser(nxt)(users) ? users : appendUser(nxt)(users);

export const editUser = nxt => users =>
  hasUser(nxt)(users) ? users.map(updateById(nxt)) : appendUser(nxt)(users);

export const dropUser = nxt => users => users.filter(diffID(nxt));
