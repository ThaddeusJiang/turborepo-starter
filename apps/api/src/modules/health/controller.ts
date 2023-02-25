import { db } from "../../clients/db";
import { Router } from "express";

const router = Router();

router.get("/health", async (req, res) => {
  // @ts-ignore - SurrealDB
  const [{ status }] = await db.query("info for DB");
  return res.json({
    db: status,
    server: "OK",
  });
});

export const HealthRouter = router;
