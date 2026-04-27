import { Request, Response } from "express";
import { initBodega } from "../models/bodega.models";

export const getBodega = async (req: Request, res: Response) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");

        const whereClause: Record<string, unknown> = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }

        const Bodega = initBodega(zona);
        const registros = await Bodega.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });

        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    } catch (error) {
        console.error("Error fetching bodega:", error);
        res.status(500).json({ error: "An error occurred while fetching bodega." });
    }
};
