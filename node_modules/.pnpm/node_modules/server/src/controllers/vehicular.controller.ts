import { Request, Response } from "express";
import { empresaVehicular } from "../models/vehicular.model";

export const getVehicular = async (req: Request, res: Response) => {
  try {

    const data = req.params;
    console.log("[vehicular] data extraída", data);

    const zona = String(data.zonas);
    console.log("[vehicular] data zona", zona);
    
    const fecha = String(req.query.fecha ?? "");

    console.log("[vehicular] filtros", { zona, fecha });

    const whereClause: Record<string, unknown> = {};
    if (fecha) {
      whereClause.fecha = fecha;
    }

    console.log("[vehicular] whereClause", whereClause);

    const Vehicular = empresaVehicular(zona);
    console.log("[vehicular] modelo inicializado", { zona });

    const registros = await Vehicular.findAll({ where: whereClause, order: [["id", "DESC"], ["fecha", "DESC"]] });

    console.log("[vehicular] resultados", { total: registros.length });

    res.status(200).json({ datos: registros, mensaje: "datos obtenidos correctamente" });
  } catch (error) {
    console.error("Error fetching vehicular:", error);
    console.error("[vehicular] detalle error", {
      message: (error as { message?: string })?.message,
      name: (error as { name?: string })?.name,
      stack: (error as { stack?: string })?.stack,
      original: (error as { original?: unknown })?.original,
    });
    res.status(500).json({ error: "An error occurred while fetching vehicular." });
  }
};

export default getVehicular;
