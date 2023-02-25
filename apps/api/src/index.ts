import { createServer } from "./server";

import { setupDB } from "./clients/db";

setupDB();

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  console.log(`api running on ${port}`);
});
