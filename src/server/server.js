import jsonServer, { router } from "json-server";
import { createReadStream, createWriteStream } from "fs";
import { Readable } from "stream";
import { resolve } from "path";

import { Users } from "../shared/store";

const {
  dummyUsers,
  operations: { addUser },
} = Users;

const server = jsonServer.create();

const middlewares = jsonServer.defaults();

const users = router(`db.json`);

const dir = resolve(`.`, __dirname);

const FILE_ERR = `ENOENT`;

const ENC = `utf8`;

const USR_PATH = `${dir}/db.json`;

const log = (req, res, next) => {
  console.log(`req`, req.body);
  console.log(`req.url`, req.url);
  next();
};

const parseDB = d => (d ? JSON.parse(d, ``, 2) : {});

const stringify = d => JSON.stringify(d);

const bufferize = d => Buffer.from(stringify(d));

const isEmpty = d => !!d.length;

const writeDB = () => createWriteStream(USR_PATH, ENC).on(`err`, console.error);

const readDB = () => createReadStream(USR_PATH, ENC).on(`err`, console.error);

const streamFromData = buff => {
  const s = new Readable();

  s._read = () => null;
  s.push(buff);
  return s;
};

const pipeTo = dest => source => source.pipe(dest);

const checkDB = () =>
  new Promise((resolve, reject) => {
    let res = ``;

    readDB()
      .on(`data`, d => {
        res += d;
      })
      .on(`close`, () => {
        resolve(parseDB(res));
      })
      .on(`err`, reject);
  });

const updateDB = users =>
  Promise.resolve(users)
    .then(bufferize)
    .then(streamFromData)
    .then(pipeTo(writeDB()))
    .catch(console.error);

const defaultDB = () => updateDB(dummyUsers());

const initDB = () =>
  checkDB()
    .then(isEmpty)
    .then(x => (x ? defaultDB() : ``));

initDB();
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.get(`/`, (req, res) => res.send(`you went to server`));

server.get(`/users`, (req, res) => {
  readDB().pipe(res);
});

server.post(`/users`, (req, res) => {
  const { user } = req.body;

  checkDB()
    .then(addUser(user))
    .then(updateDB)
    .then(() => readDB().pipe(res));
});

server.use(log);

server.use(users);
server.listen(4000, () => {
  console.log(`JSON Server is running on port 4000`);
});
