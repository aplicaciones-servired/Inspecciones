import { Bicicleta } from "../models/bisicleta.models";
import { Request, Response } from "express";

export const getBicicleta = async (req: Request, res: Response) => {
  try {
    const zona = (req.params.zona as string) || (req.query.zona as string);
    const fecha = req.query.fecha as string;
    let whereClause = {};
    if (zona) {
      whereClause = { empresa: zona };
    }
    if (fecha) {
      whereClause = { ...whereClause, fecha_inspeccion: fecha };
    }
    
    const bicicletas = await Bicicleta.findAll({ where: whereClause, order: [['id', 'DESC'], ['fecha_inspeccion', 'DESC']] });
    res
      .status(200)
      .json({ datos: bicicletas, mensaje: "dato obtenidos correctamente" });
  } catch (error) {
    console.error("Error fetching bicicletas:", error);
    const dbError = error as { original?: { code?: string }; message?: string };
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
