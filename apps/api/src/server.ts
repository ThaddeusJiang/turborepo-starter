import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import { EmployeeRouter } from "./modules/employees/controller";

import { AccountRouter } from "./modules/accounts/controller";
import { HealthRouter } from "./modules/health/controller";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .use(EmployeeRouter)
    .use(AccountRouter)
    .use(HealthRouter);

  return app;
};
