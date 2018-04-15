import uid from "uid";

import { setId, user } from "./operations";
import { USER_ACTIONS } from "./constants";

const init = Array(15)
  .fill(user())
  .map(p => setId(uid())(p));

const users = (state = init, { type, curry }) =>
  USER_ACTIONS.has(type) ? curry(state) : state;

export default users;
