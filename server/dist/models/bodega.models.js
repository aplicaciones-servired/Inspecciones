"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bodega = void 0;
exports.initBodega = initBodega;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Bodega extends sequelize_1.Model {
}
exports.Bodega = Bodega;
let initializedFor = null;
function initBodega(zona) {
    const sequelize = zona === "Multired" ? dabase_inspeciones_1.dbInspeccionesYum : dabase_inspeciones_1.dbInspecciones;
    if (initializedFor !== sequelize) {
        Bodega.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            fecha_inspeccion: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false,
            },
            responsable_inspeccion: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: false,
            },
            ubicacion: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: false,
            },
            pregunta1: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta2: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta3: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta4: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta5: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta6: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta7: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta8: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta9: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta10: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta11: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta12: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            observacion: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "inspeccion_bodega",
            timestamps: false,
        });
        initializedFor = sequelize;
    }
    return Bodega;
}
