"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHerramientas = void 0;
const herramientas_models_1 = require("../models/herramientas.models");
const getHerramientas = async (req, res) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }
        const Herramientas = (0, herramientas_models_1.initHerramientas)(zona);
        const registros = await Herramientas.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching herramientas:", error);
        res.status(500).json({ error: "An error occurred while fetching herramientas." });
    }
};
exports.getHerramientas = getHerramientas;
