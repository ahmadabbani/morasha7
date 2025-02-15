import pool from "../utils/db.js";

exports.handler = async (event) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "المستخدمين" (
        "المعرف" SERIAL PRIMARY KEY,
        "الاسم" VARCHAR(255) NOT NULL,
        "الهاتف" VARCHAR(20) UNIQUE NOT NULL,
        "البريد" VARCHAR(255) UNIQUE NOT NULL,
        "المنطقة" VARCHAR(100) NOT NULL,
        "الحالة" BOOLEAN DEFAULT TRUE,
        "تاريخ_التسجيل" DATE DEFAULT CURRENT_DATE,
        "تاريخ_الجلسة" DATE,
        "وقت_الجلسة" TIME
      )
    `);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "تم إنشاء الجدول بنجاح" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
