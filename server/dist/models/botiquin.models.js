"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Botiquin = void 0;
exports.initBotiquin = initBotiquin;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Botiquin extends sequelize_1.Model {
}
exports.Botiquin = Botiquin;
let initializedFor = null;
function initBotiquin(zona) {
    const sequelize = zona === "Multired" ? dabase_inspeciones_1.dbInspeccionesYum : dabase_inspeciones_1.dbInspecciones;
    if (initializedFor !== sequelize) {
        Botiquin.init({
            id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            fecha_inspeccion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
            responsable_inspeccion: { type: sequelize_1.DataTypes.STRING(80), allowNull: false },
            responsable_documento: { type: sequelize_1.DataTypes.STRING(80), allowNull: false },
            lugar_inspeccion: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta1: { type: sequelize_1.DataTypes.STRING(100), allowNull: false },
            ubicacion1: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad1: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion1: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta2: { type: sequelize_1.DataTypes.STRING(80), allowNull: false },
            ubicacion2: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad2: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion2: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta3: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion3: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad3: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion3: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta4: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion4: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad4: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion4: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta5: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion5: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad5: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion5: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta6: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion6: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad6: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion6: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta7: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion7: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad7: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion7: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta8: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion8: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad8: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion8: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta9: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion9: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad9: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion9: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta10: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion10: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad10: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion10: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta11: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion11: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad11: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion11: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta12: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion12: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad12: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion12: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta13: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion13: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad13: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion13: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta14: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion14: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad14: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion14: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta15: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion15: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad15: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion15: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta16: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            ubicacion16: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            capacidad16: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion16: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            nota: { type: sequelize_1.DataTypes.STRING(100), allowNull: true },
        }, {
            sequelize,
            tableName: "inspeccion_botiquin",
            timestamps: false,
        });
        initializedFor = sequelize;
    }
    return Botiquin;
}
