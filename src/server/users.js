import { createReadStream } from "fs";
import { resolve } from "path";
import { router } from "json-server";

const users = router(`db.json`);

const dir = resolve(`.`, __dirname);

const FILE_ERR = `ENOENT`;

export const USR_PATH = `${dir}/db.json`;

users.get(`/`, (req, res) => res.send(`you went to users`));
users.get(`/users`, (req, res) => {
  res.writeHead(200);
  res.send(`hello`);

  // createReadStream(USR_PATH).pipe(res);
});
export default users;
