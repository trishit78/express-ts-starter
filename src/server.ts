import express from "express";
import { serverConfig } from "./config";
//import { pingHandle } from "./controllers/ping.controller";
import  pingRouter  from "./router/ping.router";
import v1Router from "./router/v1";
import v2Router from "./router/v2";
import { genericErrorHandler } from "./middlewares/error.middleware";
//import { z } from "zod";
import logger from "./config/logger.config";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation.middleware";

const app = express();


// here before the req, we are parsing it

app.use(express.json());  // acts like a middleware if it recieves a json then it is going to parse it
app.use(express.text());  // acts like a middleware if it recieves a text then it is going to parse it
app.use(express.urlencoded());  // acts like a middleware if it recieves a url-encoded data then it is going to parse it

app.use(attachCorrelationIdMiddleware);

// for routing we are using app.use
app.use("/ping",pingRouter);  // routing function       
app.use("/api/v1",v1Router);  // routing function
app.use("/api/v2",v2Router);  // routing function



// after all the requests gets handled then then this custom err handler works
app.use(genericErrorHandler)

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  logger.info(`Press Ctrl+C to stop the server`,{"name":"dev server"});



  // const obj = {
  //   "name":"trishit",
  //   "age":34
  // }

  // const objSchema = z.object({
  //   "name":z.string(),
  //   "age":z.number().int().positive()
  // });

  // console.log(objSchema.parse(obj));

});
