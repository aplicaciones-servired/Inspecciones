"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbloguin = exports.dbInspeccionesAdmin = exports.dbInspeccionesYum = exports.dbInspecciones = void 0;
// ...existing code...
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function requireEnv(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Falta la variable de entorno: ${name}`);
    }
    return value;
}
function requireEnvOneOf(names) {
    for (const name of names) {
        const value = process.env[name];
        if (value)
            return value;
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
const port = Number(process.env.ENV_INSPECIONES_PORT ?? 3306);
const connectTimeout = Number(process.env.ENV_INSPECIONES_CONNECT_TIMEOUT ?? 10000);
exports.dbInspecciones = new sequelize_1.Sequelize(database, username, password, {
    host,
    port,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
        connectTimeout,
    },
});
exports.dbInspeccionesYum = new sequelize_1.Sequelize(databaseYum, username, password, {
    host,
    port,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
        connectTimeout,
    },
});
exports.dbInspeccionesAdmin = new sequelize_1.Sequelize(databaseAdmin, username, password, {
    host,
    port,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
        connectTimeout,
    },
});
exports.dbloguin = new sequelize_1.Sequelize(loguin, username, password, {
    host,
    port,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
        connectTimeout,
    },
});
// ...existing code...
