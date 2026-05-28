"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loguin = void 0;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class Loguin extends sequelize_1.Model {
}
exports.Loguin = Loguin;
Loguin.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    login: {
        type: sequelize_1.DataTypes.STRING(35),
        allowNull: false,
    },
    pass: {
        type: sequelize_1.DataTypes.STRING(35),
        allowNull: false,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(35),
        allowNull: false,
    },
    perfil: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    activo: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    imei: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize: dabase_inspeciones_1.dbloguin,
    tableName: "tbusuario",
    timestamps: false,
});
