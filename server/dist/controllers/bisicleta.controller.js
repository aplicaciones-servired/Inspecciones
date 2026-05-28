"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBicicleta = void 0;
const bisicleta_models_1 = require("../models/bisicleta.models");
const getBicicleta = async (req, res) => {
    try {
        const zona = req.params.zona || req.query.zona;
        const fecha = req.query.fecha;
        let whereClause = {};
        if (zona) {
            whereClause = { empresa: zona };
        }
        if (fecha) {
            whereClause = { ...whereClause, fecha_inspeccion: fecha };
        }
        const bicicletas = await bisicleta_models_1.Bicicleta.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
        res
            .status(200)
            .json({ datos: bicicletas, mensaje: "dato obtenidos correctamente" });
    }
    catch (error) {
        console.error("Error fetching bicicletas:", error);
        const dbError = error;
        if (dbError.original?.code === "ER_ACCESS_DENIED_ERROR") {
            res.status(500).json({
                error: "No fue posible conectarse a MySQL. Verifica usuario/clave/permisos del host.",
            });
            return;
        }
        res
            .status(500)
            .json({ error: dbError.message ?? "An error occurred while fetching bicicletas." });
    }
};
exports.getBicicleta = getBicicleta;
