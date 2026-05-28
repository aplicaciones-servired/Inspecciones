"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locativa = void 0;
exports.initLocativa = initLocativa;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Locativa extends sequelize_1.Model {
}
exports.Locativa = Locativa;
let initializedFor = null;
function initLocativa(zona) {
    const sequelize = zona === "Multired" ? dabase_inspeciones_1.dbInspeccionesYum : dabase_inspeciones_1.dbInspecciones;
    if (initializedFor !== sequelize) {
        Locativa.init({
            id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            fecha_inspeccion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
            responsable_inspeccion: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            responsable_documento: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            lugar_inspeccion: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            pregunta1: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion1: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion1: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta2: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion2: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion2: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta3: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion3: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion3: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta4: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion4: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion4: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta5: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion5: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion5: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta6: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion6: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion6: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta7: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion7: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion7: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta8: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion8: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion8: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta9: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion9: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion9: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta10: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion10: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion10: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta11: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion11: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion11: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            pregunta12: { type: sequelize_1.DataTypes.STRING(500), allowNull: false },
            calificacion12: { type: sequelize_1.DataTypes.STRING(60), allowNull: false },
            observacion12: { type: sequelize_1.DataTypes.STRING(60), allowNull: true },
            imagen_observacion: { type: sequelize_1.DataTypes.BLOB, allowNull: false },
        }, {
            sequelize,
            tableName: "inspeccion_locativa",
            timestamps: false,
        });
        initializedFor = sequelize;
    }
    return Locativa;
}
