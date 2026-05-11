import { Request, Response } from "express";
import { Loguin } from "../models/loguin.models";

type LoginBody = {
	login?: unknown;
	pass?: unknown;
};

function sanitizeInput(value: unknown): string | null {
	if (value == null) return null;
	const raw = typeof value === 'string' ? value : String(value);
	const cleaned = raw.replace(/\0/g, '').trim();
	if (!cleaned || cleaned.length > 35) return null;
	return cleaned;
}

export const postLoguin = async (req: Request<unknown, unknown, LoginBody>, res: Response) => {
	try {
		const login = sanitizeInput(req.body?.login);
		const pass = sanitizeInput(req.body?.pass);

		if (!login || !pass) {
			return res.status(400).json({
				ok: false,
				mensaje: "Debes enviar login y pass validos.",
			});
		}

		const usuario = await Loguin.findOne({
			where: {
				login,
				pass,
				activo: true,
			},
			attributes: ["id", "login", "nombre", "perfil", "activo", "imei"],
		});

		if (!usuario) {
			return res.status(401).json({
				ok: false,
				mensaje: "Credenciales invalidas o usuario inactivo.",
			});
		}

		return res.status(200).json({
			ok: true,
			mensaje: "Autenticacion correcta.",
			usuario: usuario.get({ plain: true }),
		});
	} catch (error) {
		console.error("Error authenticating login:", error);
		return res.status(500).json({
			ok: false,
			mensaje: "No fue posible validar el acceso.",
		});
	}
};
