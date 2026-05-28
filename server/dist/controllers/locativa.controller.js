"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocativa = void 0;
const locativa_models_1 = require("../models/locativa.models");
const getLocativa = async (req, res) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }
        const Locativa = (0, locativa_models_1.initLocativa)(zona);
        const registros = await Locativa.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching locativa:", error);
        res.status(500).json({ error: "An error occurred while fetching locativa." });
    }
};
exports.getLocativa = getLocativa;
