// ...existing code...
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta la variable de entorno: ${name}`);
  }
  return value;
}

function requireEnvOneOf(names: string[]): string {
  for (const name of names) {
    const value = process.env[name];
    if (value) return value;
  }
  throw new Error(`Falta una variable de entorno requerida. Usa una de: ${names.join(", ")}`);
}

const host = requireEnv("ENV_INSPECIONES_HOST");
const username = requireEnv("ENV_INSPECIONES_USER");
const password = requireEnv("ENV_INSPECIONES_PASSWORD");
const database = requireEnv("ENV_INSPECIONES_DATABASE");
const databaseYum = requireEnv("ENV_INSPECIONES_DATABASEYUM");
const databaseAdmin = requireEnvOneOf(["ENV_INSPECIONES_DATABASEADMIN", "ENV_INSPECIONES_DATABASELOGUIN"]);
const loguin = requireEnvOneOf(["ENV_INSPECIONES_LOGUIN"]);


export const dbInspecciones = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
  logging: false,
});

export const dbInspeccionesYum = new Sequelize(databaseYum, username, password, {
  host,
  dialect: "mysql",
  logging: false,
});

export const dbInspeccionesAdmin = new Sequelize(databaseAdmin, username, password, {
  host,
  dialect: "mysql",
  logging: false,
});

export const dbloguin = new Sequelize(loguin, username, password, {
  host,
  dialect: "mysql",
  logging: false,
});
// ...existing code...