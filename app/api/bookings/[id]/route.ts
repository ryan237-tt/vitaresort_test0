import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const res = await pool.query(
    `
    SELECT
      id,
      first_name AS "firstName",
      last_name  AS "lastName",
      phone,
      check_in::date  as "checkIn",
      check_out::date as "checkOut",
      total,
      UPPER(payment_status) AS "paymentStatus"
    FROM booking
    WHERE id = $1
    LIMIT 1
    `,
    [id]
  );

  if (res.rows.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ booking: res.rows[0] });
}
