import { Request } from "../../utils";

const { rqConstants } = Request;

export const USR_URL = `http://localhost:4000/users`;

export const PREFIX = `USER_REQUEST`;

export const SET_USERS = `SET_USERS`;

export const GET_USERS = `GET_USERS`;

export const CREATE_USER = `CREATE_USER`;

export const UPDATE_USER = `UPDATE_USER`;

export const DELETE_USER = `DELETE_USER`;

export const AGE_0 = `17 or younger`;

export const AGE_1 = `18-25`;

export const AGE_2 = `26-35`;

export const AGE_3 = `36-45`;

export const RED = `Red`;

export const ORANGE = `Orange`;

export const YELLOW = `Yellow`;

export const GREEN = `Green`;

export const BLUE = `Blue`;

export const PURPLE = `Purple`;

export const COLOR_OTHER = `Other`;

export const AGES = [ AGE_0, AGE_1, AGE_2, AGE_3 ];

export const COLORS = [ RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE, COLOR_OTHER ];

export const REQUEST_ACTIONS = rqConstants(PREFIX);

export const USER_ACTIONS = new Set([
  SET_USERS,
  UPDATE_USER,
  DELETE_USER,
  GET_USERS,
  CREATE_USER,
]);
