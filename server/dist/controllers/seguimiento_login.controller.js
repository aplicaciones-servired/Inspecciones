"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeguimientoLogin = void 0;
const sequelize_1 = require("sequelize");
const seguimiento_login_models_1 = require("../models/seguimiento_login.models");
function toOnlyDate(value) {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return value.toISOString().slice(0, 10);
    }
    const raw = value == null ? "" : String(value);
    const isoMatch = raw.match(/^(\d{4}-\d{2}-\d{2})/);
    if (isoMatch)
        return isoMatch[1];
    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) {
        return parsed.toISOString().slice(0, 10);
    }
    return "";
}
const getSeguimientoLogin = async (req, res) => {
    try {
        const fecha = String(req.query.fecha ?? "");
        const whereClause = fecha ? (0, sequelize_1.where)((0, sequelize_1.fn)("DATE", (0, sequelize_1.col)("fecha")), fecha) : undefined;
        const registros = await seguimiento_login_models_1.SeguimientoLogin.findAll({
            where: whereClause,
            order: [["id", "DESC"], ["fecha", "DESC"]],
        });
        const datos = registros.map((registro) => {
            const plain = registro.get({ plain: true });
            return {
                ...plain,
                fecha: toOnlyDate(plain.fecha),
            };
        });
        res.status(200).json({ datos, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching seguimiento_login:", error);
        res.status(500).json({ error: "An error occurred while fetching seguimiento_login." });
    }
};
exports.getSeguimientoLogin = getSeguimientoLogin;
