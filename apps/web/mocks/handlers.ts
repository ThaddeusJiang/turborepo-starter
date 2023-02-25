import { rest } from "msw";
import { Employee, MockEmployee } from "shared/models/Employee";

const baseUrl = "http://localhost:3001";

export const handlers = [
  rest.get(baseUrl + "/employees/test", (_req, res, ctx) => res(ctx.json<Employee>(MockEmployee))),
];
