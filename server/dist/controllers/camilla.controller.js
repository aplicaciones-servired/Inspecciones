"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCamilla = void 0;
const camilla_models_1 = require("../models/camilla.models");
const getCamilla = async (req, res) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }
        const Camilla = (0, camilla_models_1.initCamilla)(zona);
        const registros = await Camilla.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching camilla:", error);
        res.status(500).json({ error: "An error occurred while fetching camilla." });
    }
};
exports.getCamilla = getCamilla;
