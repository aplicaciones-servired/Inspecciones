import { Request, Response } from "express";
import { initCamilla } from "../models/camilla.models";

export const getCamilla = async (req: Request, res: Response) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");

        const whereClause: Record<string, unknown> = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }

        const Camilla = initCamilla(zona);
        const registros = await Camilla.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });

        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    } catch (error) {
        console.error("Error fetching camilla:", error);
        res.status(500).json({ error: "An error occurred while fetching camilla." });
    }
};
