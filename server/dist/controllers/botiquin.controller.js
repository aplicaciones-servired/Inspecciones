"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBotiquin = void 0;
const botiquin_models_1 = require("../models/botiquin.models");
const getBotiquin = async (req, res) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }
        const Botiquin = (0, botiquin_models_1.initBotiquin)(zona);
        const registros = await Botiquin.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']]
        });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching botiquin:", error);
        res.status(500).json({ error: "An error occurred while fetching botiquin." });
    }
};
exports.getBotiquin = getBotiquin;
