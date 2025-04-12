import express from "express";

import { serverConfig } from "./config";
//import { pingHandle } from "./controllers/ping.controller";
import  pingRouter  from "./router/ping.router";
import v1Router from "./router/v1";
import v2Router from "./router/v2";
const app = express();


// for routing we are using app.use

app.use("/ping",pingRouter);  // routing function       
app.use("/api/v1",v1Router);  // routing function
app.use("/api/v2",v2Router);  // routing function


app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
