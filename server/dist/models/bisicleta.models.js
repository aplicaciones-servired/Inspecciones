"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Bicicleta extends sequelize_1.Model {
}
exports.Bicicleta = Bicicleta;
Bicicleta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    cedula: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    fecha_inspeccion: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    hora_inspeccion: {
        type: sequelize_1.DataTypes.TIME,
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
    llantas: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    frenos_cambios: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    pinon_cadena: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    marco_tenedor: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    Compromiso1: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    Compromiso2: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    observaciones: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize: dabase_inspeciones_1.dbInspecciones,
    tableName: "inspeccion_bicicleta",
    timestamps: false,
});
