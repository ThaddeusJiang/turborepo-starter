import { queryAllEntities } from "../../clients/db";
import { Router } from "express";
import { AccountKey } from "../../shared/const/models";

const router = Router();

router.get("/accounts", async (req, res) => {
  const data = await queryAllEntities(AccountKey);
  return res.json(data);
});

export const AccountRouter = router;
