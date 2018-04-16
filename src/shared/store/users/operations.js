import faker from "faker";
import uid from "uid";

import { AGE_0 } from "./constants";

export const user = (
  firstName = faker.name.firstName(),
  lastName = faker.name.lastName(),
  email = faker.internet.exampleEmail(),
  age = AGE_0,
  height = {
    ft: faker.random.number({ min: 0, max: 10 }),
    in: faker.random.number({ min: 0, max: 12 }),
  },
  weight = ``,
  color = `Blue`,
  id = uid()
) => ({
  firstName,
  lastName,
  email,
  age,
  height,
  color,
  id,
  weight,
});

export const firstName = ({ firstName } = user()) => firstName;

export const lastName = ({ lastName } = user()) => lastName;

export const email = ({ email } = user()) => email;

export const age = ({ age } = user()) => age;

export const height = ({ height } = user()) => height;

export const weight = ({ weight } = user()) => weight;

export const color = ({ color } = user()) => color;

export const id = ({ id } = user()) => id;

export const setFName = fName => u =>
  user(
    fName,
    lastName(u),
    email(u),
    age(u),
    height(u),
    weight(u),
    color(u),
    id(u)
  );

export const sameID = p0 => p1 => id(p0) == id(p1);

export const diffID = p0 => p1 => !sameID(p0)(p1);

export const copy = u =>
  user(
    firstName(u),
    lastName(u),
    email(u),
    age(u),
    height(u),
    weight(u),
    color(u),
    id(u)
  );

export const update = (next = user()) => (orig = user()) => ({
  ...copy(orig),
  ...copy(next),
});

export const setId = id => orig => update({ id })(orig);

export const updateById = nxt => orig =>
  sameID(nxt)(orig) ? update(nxt)(orig) : orig;

export const idSet = (users = []) => new Set(users.map(id));

export const hasUser = (nxt = user()) => users => idSet(users).has(id(nxt));

export const xHasUser = (nxt = user()) => users => !hasUser(nxt)(users);

export const appendUser = nxt => users => users.concat(copy(nxt));

export const addUser = nxt => users =>
  hasUser(nxt)(users) ? users : appendUser(nxt)(users);

export const editUser = nxt => users =>
  hasUser(nxt)(users) ? users.map(updateById(nxt)) : appendUser(nxt)(users);

export const dropUser = nxt => users => users.filter(diffID(nxt));
