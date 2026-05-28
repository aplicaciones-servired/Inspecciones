"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtintores = void 0;
const extintores_models_1 = require("../models/extintores.models");
const getExtintores = async (req, res) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");
        const whereClause = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }
        const Extintores = (0, extintores_models_1.initExtintores)(zona);
        const registros = await Extintores.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching extintores:", error);
        res.status(500).json({ error: "An error occurred while fetching extintores." });
    }
};
exports.getExtintores = getExtintores;
