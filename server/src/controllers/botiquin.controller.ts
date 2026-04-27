import { Request, Response } from "express";
import { initBotiquin } from "../models/botiquin.models";

export const getBotiquin = async (req: Request, res: Response) => {
    try {
        const zona = String(req.params.zonas ?? req.query.zona ?? "");
        const fecha = String(req.query.fecha ?? "");

        const whereClause: Record<string, unknown> = {};
        if (fecha) {
            whereClause.fecha_inspeccion = fecha;
        }

        const Botiquin = initBotiquin(zona);
        const registros = await Botiquin.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']]
            
         });

        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    } catch (error) {
        console.error("Error fetching botiquin:", error);
        res.status(500).json({ error: "An error occurred while fetching botiquin." });
    }
};
