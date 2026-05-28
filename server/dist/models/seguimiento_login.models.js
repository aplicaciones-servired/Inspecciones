"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientoLogin = void 0;
const sequelize_1 = require("sequelize");
const dabase_inspeciones_1 = require("../db/dabase.inspeciones");
class SeguimientoLogin extends sequelize_1.Model {
}
exports.SeguimientoLogin = SeguimientoLogin;
SeguimientoLogin.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cedula: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(120),
        allowNull: false,
    },
    empresa: {
        type: sequelize_1.DataTypes.STRING(120),
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: dabase_inspeciones_1.dbInspeccionesAdmin,
    tableName: "seguimiento_login",
    timestamps: false,
});
