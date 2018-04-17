import { copy, hasUser, setFName } from "./operations";
import { createUser, deleteUser, updateUser } from "./actions";
import { dummyUsers as users } from "./reducer";

const myUsers = users();

describe(`users reducer`, () => {
  const fakeUser = copy({ id: `fakeUser` });

  const fakeName = setFName(`fakename`)(fakeUser);

  describe(`default`, () => {
    it(`returns an arracy of 15 userObjects`, () => {
      expect(myUsers).toContain(myUsers[0]);
    });
  });
  describe(`createUser`, () => {
    it(`adds a new user to the list of current users`, () => {
      expect(users(myUsers, createUser(fakeUser))).toContainEqual(fakeUser);
    });
  });
  describe(`updateUser`, () => {
    it(`adds a new user to the list of current users`, () => {
      expect(users(myUsers, updateUser(fakeName))).toContainEqual(fakeName);
    });
  });

  describe(`deleteUser`, () => {
    it(`adds a new user to the list of current users`, () => {
      expect(users(myUsers, deleteUser(fakeName))).not.toContainEqual(fakeName);
    });
  });
});
