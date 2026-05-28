"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Herramientas = void 0;
exports.initHerramientas = initHerramientas;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Herramientas extends sequelize_1.Model {
}
exports.Herramientas = Herramientas;
let initializedFor = null;
function initHerramientas(zona) {
    const sequelize = zona === "Multired" ? dabase_inspeciones_1.dbInspeccionesYum : dabase_inspeciones_1.dbInspecciones;
    if (initializedFor !== sequelize) {
        Herramientas.init({
            id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            fecha_inspeccion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
            responsable_inspeccion: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            pregunta1: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta2: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta3: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta4: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta5: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta6: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta7: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta8: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta9: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta10: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta11: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta12: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta13: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta14: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta15: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta16: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta17: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta18: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta19: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta20: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta21: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta22: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta23: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta24: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta25: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta26: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta27: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta28: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta29: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta30: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta31: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta32: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta33: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta34: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta35: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta36: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta37: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta38: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta39: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta40: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta41: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta42: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta43: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta44: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observaciones: { type: sequelize_1.DataTypes.STRING(600), allowNull: true },
        }, {
            sequelize,
            tableName: "inspeccion_herramientas",
            timestamps: false,
        });
        initializedFor = sequelize;
    }
    return Herramientas;
}
