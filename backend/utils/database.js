import dotenv from "dotenv"; // Importar dotenv si usas ESM

// Check if the environment variables have already been loaded
if (!process.env.DB_NAME) {
  dotenv.config();
}

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;
import { Sequelize } from "sequelize";

// Convertir DB_PORT a número
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: "mssql",
  host: DB_HOST,
  port: Number(DB_PORT), // Asegúrate de convertirlo a número
});

export { sequelize };
