"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProtecion = void 0;
const protecion_models_1 = require("../models/protecion.models");
const getProtecion = async (req, res) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }
        const Protecion = (0, protecion_models_1.initProtecion)(zona);
        const registros = await Protecion.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching protecion:", error);
        res.status(500).json({ error: "An error occurred while fetching protecion." });
    }
};
exports.getProtecion = getProtecion;
