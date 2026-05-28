"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBodega = void 0;
const bodega_models_1 = require("../models/bodega.models");
const getBodega = async (req, res) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }
        const Bodega = (0, bodega_models_1.initBodega)(zona);
        const registros = await Bodega.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching bodega:", error);
        res.status(500).json({ error: "An error occurred while fetching bodega." });
    }
};
exports.getBodega = getBodega;
