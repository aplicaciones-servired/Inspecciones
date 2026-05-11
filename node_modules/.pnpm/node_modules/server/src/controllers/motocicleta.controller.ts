import { Request, Response } from "express";
import { Motocicleta } from "../models/motocicleta.models";

export const getMotocicleta = async (req: Request, res: Response) => {
    try {
        const fecha = String(req.query.fecha ?? "");

        const whereClause: Record<string, unknown> = {};
        if (fecha) {
            whereClause.fecha = fecha;
        }
        const registros = await Motocicleta.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha', 'DESC']] });

        res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
    } catch (error) {
        console.error("Error fetching motocicleta:", error);
        res.status(500).json({ error: "An error occurred while fetching motocicleta." });
    }
};
