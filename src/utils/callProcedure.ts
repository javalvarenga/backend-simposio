// src/dbUtils.ts

import { db } from "../config/db";

export async function callProcedure<T = any>(
  procedureName: string,
  params: (string | number | boolean | Buffer | null)[] = []
): Promise<T[]> {
  const placeholders = params.map(() => "?").join(", ");
  const sql = `CALL ${procedureName}(${placeholders})`;

  console.log(`[PROC] Executing: ${sql}`);
  console.log(`[PROC] Params:`, params);

  const [resultSets] = await db.raw(sql, params);

  // MySQL devuelve varios result sets, tomamos el primero útil
  if (Array.isArray(resultSets)) {
    return resultSets[0] as T[];
  }

  return [];
}
