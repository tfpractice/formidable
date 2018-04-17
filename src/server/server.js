import jsonServer, { router } from "json-server";
import { createReadStream, createWriteStream, writeFile } from "fs";
import { resolve } from "path";

import { Users } from "../shared/store";

// import users from "./users";
const server = jsonServer.create();

const middlewares = jsonServer.defaults();

const users = router(`db.json`);

const dir = resolve(`.`, __dirname);

const FILE_ERR = `ENOENT`;

const USR_PATH = `${dir}/db.json`;

server.use(jsonServer.bodyParser);
server.use(middlewares);
const log = (req, res, next) => {
  // console.log(`req`, req);
  next();
};

server.get(`/`, (req, res) => res.send(`you went to server`));
server.get(`/users`, (req, res) => {
  writeFile(USR_PATH, JSON.stringify(Users.reducer()), (e, wr, val) => {
    createReadStream(USR_PATH, `utf8`).pipe(res);
  });

  // createReadStream(USR_PATH, `utf8`).on(`data`, d => console.log(`d`, d));
  // createReadStream(USR_PATH).pipe(res);
});

// server.post(`/users`, (req, res) => {
//   const { user } = req.body;
//
//   createReadStream(USR_PATH).pipe(res);
// });

server.use(log);

server.use(users);

// server.get(`/`, users);

// server.get(`/users`, (req, res) => res.send(`you went to users`));
server.listen(4000, () => {
  console.log(`JSON Server is running`);
});
