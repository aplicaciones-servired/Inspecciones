"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicular = void 0;
const vehicular_model_1 = require("../models/vehicular.model");
const getVehicular = async (req, res) => {
    try {
        const data = req.params;
        console.log("[vehicular] data extraída", data);
        const zona = String(data.zonas);
        console.log("[vehicular] data zona", zona);
        const fecha = String(req.query.fecha ?? "");
        console.log("[vehicular] filtros", { zona, fecha });
        const whereClause = {};
        if (fecha) {
            whereClause.fecha = fecha;
        }
        console.log("[vehicular] whereClause", whereClause);
        const Vehicular = (0, vehicular_model_1.empresaVehicular)(zona);
        console.log("[vehicular] modelo inicializado", { zona });
        const registros = await Vehicular.findAll({ where: whereClause, order: [["id", "DESC"], ["fecha", "DESC"]] });
        console.log("[vehicular] resultados", { total: registros.length });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching vehicular:", error);
        console.error("[vehicular] detalle error", {
            message: error?.message,
            name: error?.name,
            stack: error?.stack,
            original: error?.original,
        });
        res.status(500).json({ error: "An error occurred while fetching vehicular." });
    }
};
exports.getVehicular = getVehicular;
exports.default = exports.getVehicular;
