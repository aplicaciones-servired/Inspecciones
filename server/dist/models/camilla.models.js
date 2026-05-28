"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camilla = void 0;
exports.initCamilla = initCamilla;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Camilla extends sequelize_1.Model {
}
exports.Camilla = Camilla;
let initializedFor = null;
function initCamilla(zona) {
    const sequelize = zona === "Multired" ? dabase_inspeciones_1.dbInspeccionesYum : dabase_inspeciones_1.dbInspecciones;
    if (initializedFor !== sequelize) {
        Camilla.init({
            id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            fecha_inspeccion: { type: sequelize_1.DataTypes.DATEONLY, allowNull: false },
            responsable_inspeccion: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            lugar: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            ubicacion: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            senalizacion: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            aceso: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            estado: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            instalacion: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            correas: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            inmovilizador: { type: sequelize_1.DataTypes.STRING(250), allowNull: false },
            observacion: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            ubicacion1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            senalizacion1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            aceso1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            estado1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            instalacion1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            correas1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            inmovilizador1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
            observacion1: { type: sequelize_1.DataTypes.STRING(250), allowNull: true },
        }, {
            sequelize,
            tableName: "inspeccion_camilla",
            timestamps: false,
        });
        initializedFor = sequelize;
    }
    return Camilla;
}
