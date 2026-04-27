import { Router } from "express";
import { getBicicleta } from "../controllers/bisicleta.controller";
import { getBodega } from "../controllers/bodega.controller";
import { getBotiquin } from "../controllers/botiquin.controller";
import { getCamilla } from "../controllers/camilla.controller";
import { getExtintores } from "../controllers/extintores.controller";
import { getHerramientas } from "../controllers/herramientas.controller";
import { getLocativa } from "../controllers/locativa.controller";
import { postLoguin } from "../controllers/loguin.controller";
import { getMotocicleta } from "../controllers/motocicleta.controller";
import { getProtecion } from "../controllers/protecion.controller";
import { getSeguimientoLogin } from "../controllers/seguimiento_login.controller";

const inspeccionesRouter = Router();

inspeccionesRouter.get("/bicicleta/:zonas", getBicicleta);
inspeccionesRouter.get("/bodega/:zonas", getBodega);
inspeccionesRouter.get("/botiquin/:zonas", getBotiquin);
inspeccionesRouter.get("/camilla/:zonas", getCamilla);
inspeccionesRouter.get("/extintores/:zonas", getExtintores);
inspeccionesRouter.get("/herramientas/:zonas", getHerramientas);
inspeccionesRouter.get("/locativa/:zonas", getLocativa);
inspeccionesRouter.get("/motocicleta", getMotocicleta);
inspeccionesRouter.get("/protecion/:zonas", getProtecion);
inspeccionesRouter.get("/seguimiento_login", getSeguimientoLogin);
inspeccionesRouter.post("/login", postLoguin);

export default inspeccionesRouter;
