import axios from "axios";

import { addUser, dropUser, editUser, user } from "./operations";
import {
  COLOR_OTHER,
  CREATE_USER,
  DELETE_USER,
  GET_USERS,
  PREFIX,
  SET_USERS,
  UPDATE_USER,
  USR_URL,
} from "./constants";
import { Request } from "../../utils";

const { rqActions } = Request;

const set = arr => state => arr;

export const setUsers = users => ({
  type: SET_USERS,
  curry: set(users),
});

export const createAction = user => ({
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

export const getAction = user => ({
  type: GET_USERS,
  curry: state => state,
});

export const usrQPend = rqActions(PREFIX).pending;

export const usrQFail = rqActions(PREFIX).failure;

export const usrQSucc = rqActions(PREFIX).success;

export const getUsers = () => dispatch =>
  Promise.resolve(getAction)
    .then(dispatch)
    .then(usrQPend)
    .then(dispatch)
    .then(() =>
      axios
        .get(USR_URL)
        .then(({ data }) => [ usrQSucc(data), setUsers(data) ].map(dispatch))
    )
    .catch(e => dispatch(usrQFail(e)));

export const createUser = user => dispatch =>
  Promise.resolve(getAction)
    .then(dispatch)
    .then(usrQPend)
    .then(dispatch)
    .then(() =>
      axios
        .post(USR_URL, {
          user: { ...user, color: user.color_other || user.color },
        })
        .then(({ data }) => [ usrQSucc(data), setUsers(data) ].map(dispatch))
    )
    .catch(e => dispatch(usrQFail(e)));
