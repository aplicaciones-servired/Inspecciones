"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = void 0;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Motocicleta extends sequelize_1.Model {
}
exports.Motocicleta = Motocicleta;
Motocicleta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true,
    },
    hora: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
        field: "Hora",
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    cedula: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    placa: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    kilometraje: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    empresa: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    salud: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    casco: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    botas: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    profundidad: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    luces: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    bocina: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    espejos: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    aceite: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    freno: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    cadena: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    soat: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    obervaciones: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: true,
    },
}, {
    sequelize: dabase_inspeciones_1.dbInspecciones,
    tableName: "inspeccion_preoperacional",
    timestamps: false,
});
