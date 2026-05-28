"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protecion = void 0;
exports.initProtecion = initProtecion;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Protecion extends sequelize_1.Model {
}
exports.Protecion = Protecion;
let initializedFor = null;
function initProtecion(zona) {
    const sequelize = zona === "Multired" ? dabase_inspeciones_1.dbInspeccionesYum : dabase_inspeciones_1.dbInspecciones;
    if (initializedFor !== sequelize) {
        Protecion.init({
            id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            fecha_inspeccion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
            responsable_inspeccion: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            lugar: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            cargo: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta1: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion1: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta2: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion2: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta3: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion3: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta4: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion4: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta5: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion5: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta6: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion6: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta7: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion7: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta8: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion8: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta9: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion9: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta10: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion10: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta11: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion11: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta12: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion12: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta13: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion13: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta14: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion14: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta15: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion15: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta16: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion16: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
        }, {
            sequelize,
            tableName: "inspeccion_proteccion",
            timestamps: false,
        });
        initializedFor = sequelize;
    }
    return Protecion;
}
