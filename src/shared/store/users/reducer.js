import uid from "uid";

import { setId, user } from "./operations";
import { setUsers } from "./actions";
import { USER_ACTIONS } from "./constants";

const init = Array(15)
  .fill(user())
  .map(p => setId(uid())(p));

const users = (state = init, { type, curry } = setUsers(state)) =>
  USER_ACTIONS.has(type) ? curry(state) : state;

export default users;
