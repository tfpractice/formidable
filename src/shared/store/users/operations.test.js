import "jasmine-expect";
import {
  addUser,
  age,
  appendUser,
  color,
  copy,
  diffID,
  dropUser,
  editUser,
  email,
  firstName,
  hasUser,
  height,
  id,
  idSet,
  lastName,
  sameID,
  setFName,
  setId,
  update,
  updateById,
  user,
  weight,
  xHasUser,
} from "./operations";

const myUser = user();

describe(`user operations`, () => {
  describe(`props`, () => {
    it(`has a firstName prop`, () => {
      expect(myUser.firstName).toBeTruthy();
    });
    it(`has a lastName prop`, () => {
      expect(myUser.lastName).toBeTruthy();
    });
    it(`has a email prop`, () => {
      expect(myUser.email).toBeTruthy();
    });
    it(`has a age prop`, () => {
      expect(myUser.age).toBeTruthy();
    });
    it(`has a height prop`, () => {
      expect(myUser.height).toBeTruthy();
    });
    it(`has a weight prop`, () => {
      expect(myUser.weight).toBe(``);
    });
    it(`has a color prop`, () => {
      expect(myUser.color).toBeTruthy();
    });
    it(`has an id prop`, () => {
      expect(myUser.id).toBeTruthy();
    });
  });
  describe(`accessors`, () => {
    describe(`firstName`, () => {
      it(`retrieves the firstName property`, () => {
        expect(firstName(myUser)).toEqual(myUser.firstName);
      });
    });
    describe(`lastName`, () => {
      it(`retrieves the lastName property`, () => {
        expect(lastName(myUser)).toEqual(myUser.lastName);
      });
    });
    describe(`age`, () => {
      it(`retrieves the age property`, () => {
        expect(age(myUser)).toEqual(myUser.age);
      });
    });
    describe(`height`, () => {
      it(`retrieves the height property`, () => {
        expect(height(myUser)).toEqual(myUser.height);
      });
    });
    describe(`weight`, () => {
      it(`retrieves the weight property`, () => {
        expect(weight(myUser)).toEqual(myUser.weight);
      });
    });
    describe(`color`, () => {
      it(`retrieves the color property`, () => {
        expect(color(myUser)).toEqual(myUser.color);
      });
    });
    describe(`id`, () => {
      it(`retrieves the id property`, () => {
        expect(id(myUser)).toEqual(myUser.id);
      });
    });
  });
  describe(`copy`, () => {
    it(`returns a new user object with copied values`, () => {
      expect(copy(myUser) === myUser).toBeFalse();
    });
  });
  describe(`comparitors`, () => {
    describe(`sameID`, () => {
      it(`returns a boolean if two users share an id`, () => {
        expect(sameID(myUser)(copy(myUser))).toBeTruthy();
      });
    });
    describe(`diffID`, () => {
      it(`returns a boolean if two users share an id`, () => {
        expect(diffID(myUser)(copy(myUser))).toBeFalse();
      });
    });
  });
  describe(`modifiers`, () => {
    describe(`setFName`, () => {
      it(`returns a new user object with an altered firstName`, () => {
        expect(setFName(`john`)(myUser).firstName).toEqual(`john`);
        expect(setFName(`john`)(myUser).id).toEqual(id(myUser));
        expect(setFName(`john`)(myUser).firstName).not.toEqual(
          firstName(myUser)
        );
      });
    });
    describe(`updateById`, () => {
      describe(`when two user objects share an // IDE`, () => {
        it(`merges the new and old values`, () => {
          expect(updateById(setFName(`john`)(myUser))(myUser).id).toEqual(
            id(myUser)
          );
          expect(
            updateById(setFName(`john`)(myUser))(myUser).firstName
          ).toEqual(`john`);
        });
      });
    }); // ////
  });
  describe(`collections`, () => {
    describe(`hasUser`, () => {
      it(`checks if a user is already present in a collections of user objects`, () => {
        expect(hasUser(myUser)([ myUser ])).toBeTruthy();
      });
    });
    describe(`xHasUser`, () => {
      it(`checks if a user is not present in a collections of user objects`, () => {
        expect(xHasUser(myUser)([])).toBeTruthy();
      });
    });
    describe(`appendUser`, () => {
      it(`adds a user object to a collections of users`, () => {
        expect(appendUser(myUser)([])).toContain(myUser);
      });
    });
    describe(`addUser`, () => {
      it(`appends a user to a collection if the user is not present`, () => {
        expect(addUser(myUser)([])).toContain(myUser);
      });
      it(`doesnt append anything to a collection if the user is already present`, () => {
        expect(addUser(myUser)([ myUser ]).length).toEqual(1);
      });
    });
    describe(`editUser`, () => {
      it(`retuns a new collection containing the updated user value matched by ID`, () => {
        const nextuser = { id: myUser.id, lastName: `jingleheimer` };

        expect(editUser(nextuser)([ myUser ]).length).toEqual(1);
      });
    });
    describe(`dropUser`, () => {
      it(`removes a iuser from a list based on id`, () => {
        expect(dropUser(myUser)([ myUser ])).not.toContain(myUser);
      });
    });
  });
});
