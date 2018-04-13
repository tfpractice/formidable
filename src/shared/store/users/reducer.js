import uid from "uid";

import * as userOps from "./operations";
import { USER_ACTIONS } from "./constants";

const { setId } = userOps;

const init = Array(15)
  .fill(userOps.user())
  .map((p, i) => userOps.setId(uid())(p));

const users = (state = init, { type, curry }) =>
  USER_ACTIONS.has(type) ? curry(state) : state;

export default users;
