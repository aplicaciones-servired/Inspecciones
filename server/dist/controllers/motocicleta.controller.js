"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMotocicleta = void 0;
const motocicleta_models_1 = require("../models/motocicleta.models");
const getMotocicleta = async (req, res) => {
    try {
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha = fecha;
        }
        const registros = await motocicleta_models_1.Motocicleta.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha', 'DESC']] });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching motocicleta:", error);
        res.status(500).json({ error: "An error occurred while fetching motocicleta." });
    }
};
exports.getMotocicleta = getMotocicleta;
