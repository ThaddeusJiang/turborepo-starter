import Surreal from "surrealdb.js";

const DB_URL = process.env.DB_URL || "https://turbo-dev.azurewebsites.net/rpc";

/**
 * SurrealDB client
 *
 * - DB record id: Person:uuid
 * - Model record id: uuid
 */
console.log("DB_URL", DB_URL);
const db = new Surreal(DB_URL);

export const setupDB = async () => {
  try {
    // Signin as a namespace, database, or root user
    await db.signin({
      user: "root",
      pass: "root",
    });

    // Select a specific namespace / database
    await db.use("test", "test");
  } catch (e) {
    console.error("ERROR", e);
  }
};

/**
 * Create a record
 *
 * id should use Record links, like: friends = [person:tobie, person:simon]. ref: https://surrealdb.com/docs/surrealql/datamodel/records
 *
 * @param partition
 * @param data
 * @returns
 */
export const createEntity = async (partition: string, data: any) => {
  const record = await db.create(partition, {
    ...data,
    createdAt: new Date().toISOString(),
  });
  return record;
};

// Update a record
export const updateEntity = async (partition: string, id: string, data: any) => {
  const record = await db.change(`${partition}:${id}`, {
    ...data,
    updatedAt: new Date().toISOString(),
  });
  return {
    ...record,
    id: decodeId(record.id),
  };
};

// Delete a record
export const deleteEntity = async (partition: string, id: string) => {
  const record = await db.change(`${partition}:${id}`, {
    deletedAt: new Date(),
  });
  return record;
};

// Query all records
export const queryAllEntities = async (partition: string) => {
  const [{ result }] = await db.query(`select * from ${partition} where deletedAt = null ORDER BY createdAt DESC`);

  // @ts-ignore - SurrealDB
  const items = (result ?? []).map((record: any) => {
    return {
      ...record,
      id: decodeId(record.id),
    };
  });

  return items;
};

// Get a record
export const getEntity = async (partition: string, id: string) => {
  const [record] = await db.select(`${partition}:${id}`);

  return {
    ...(record as Record<string, unknown>),
    id,
  };
};

export const decodeId = (id: string) => {
  const [, entityId] = id?.split(":");
  return entityId;
};

export { db };
