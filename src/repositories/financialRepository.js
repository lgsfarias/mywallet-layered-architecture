import connection from '../database.js';

async function createEvent(id, value, type) {
  await connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [id, value, type],
  );
}

async function getEventByUserId(id) {
  const events = await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [user.id],
  );

  return events.rows;
}

export { createEvent, getEventByUserId };
