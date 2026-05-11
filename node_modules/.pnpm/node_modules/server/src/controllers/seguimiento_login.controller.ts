import { Request, Response } from "express";
import { col, fn, where } from "sequelize";
import { SeguimientoLogin } from "../models/seguimiento_login.models";

function toOnlyDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  const raw = value == null ? "" : String(value);
  const isoMatch = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (isoMatch) return isoMatch[1];

  const parsed = new Date(raw);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return "";
}

export const getSeguimientoLogin = async (req: Request, res: Response) => {
  try {
    const fecha = String(req.query.fecha ?? "");

    const whereClause = fecha ? where(fn("DATE", col("fecha")), fecha) : undefined;

    const registros = await SeguimientoLogin.findAll({
      where: whereClause,
      order: [["id", "DESC"], ["fecha", "DESC"]],
    });

    const datos = registros.map((registro) => {
      const plain = registro.get({ plain: true }) as Record<string, unknown>;
      return {
        ...plain,
        fecha: toOnlyDate(plain.fecha),
      };
    });

    res.status(200).json({ datos, mensaje: "datos obtenidos correctamente" });
  } catch (error) {
    console.error("Error fetching seguimiento_login:", error);
    res.status(500).json({ error: "An error occurred while fetching seguimiento_login." });
  }
};
