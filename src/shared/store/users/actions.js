import { addUser, dropUser, editUser } from "./operations";
import { CREATE_USER, DELETE_USER, SET_USERS, UPDATE_USER } from "./constants";

const set = arr => state => arr;

export const setUsers = users => ({
  type: SET_USERS,
  curry: set(users),
});

export const createUser = user => ({
  type: CREATE_USER,
  curry: addUser(user),
});

export const updateUser = user => ({
  type: UPDATE_USER,
  curry: editUser(user),
});

export const deleteUser = user => ({
  type: DELETE_USER,
  curry: dropUser(user),
});
