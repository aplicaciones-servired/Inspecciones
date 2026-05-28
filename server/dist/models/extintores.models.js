"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extintores = void 0;
exports.initExtintores = initExtintores;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Extintores extends sequelize_1.Model {
}
exports.Extintores = Extintores;
let initializedFor = null;
function initExtintores(zona) {
    const sequelize = zona === "Multired" ? dabase_inspeciones_1.dbInspeccionesYum : dabase_inspeciones_1.dbInspecciones;
    if (initializedFor !== sequelize) {
        Extintores.init({
            id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            fecha_inspeccion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
            responsable_inspeccion: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            responsable_documento: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            lugar_inspeccion: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            numero: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            tipo: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion: { type: sequelize_1.DataTypes.STRING(60), allowNull: false, field: "ubicación" },
            capacidad: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            proxima_recarga: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
            golpes: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            manometro: { type: sequelize_1.DataTypes.STRING(60), allowNull: false, field: "manómetro" },
            pasador_seguridad: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            manguera: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            boquilla: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            manija: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            cilindro: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pintura: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            senalizacion: { type: sequelize_1.DataTypes.STRING(60), allowNull: false, field: "señalización" },
            acceso: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            visibilidad: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            recomendaciones: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
        }, {
            sequelize,
            tableName: "inspeccion_extintores",
            timestamps: false,
        });
        initializedFor = sequelize;
    }
    return Extintores;
}
