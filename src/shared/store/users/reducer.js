import uid from "uid";

import { REQUEST_ACTIONS, USER_ACTIONS } from "./constants";
import { setId, user } from "./operations";
import { setUsers, usrQSucc } from "./actions";

const reqDefault = { status: null, updatedAt: null, message: null };

const init = Array(15)
  .fill(user())
  .map(p => setId(uid())(p));

const users = (state = init, { type, curry } = setUsers(state)) =>
  USER_ACTIONS.has(type) ? curry(state) : state;

export const request = (state = reqDefault, { type, curry } = usrQSucc()) =>
  REQUEST_ACTIONS.has(type) ? curry(state) : state;

export default users;
