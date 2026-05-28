"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const inspecciones_routes_1 = __importDefault(require("./routes/inspecciones.routes"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 3000);
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "https://inspecciones.serviredgane.cloud"],
}));
app.use(express_1.default.json());
app.use("/", inspecciones_routes_1.default);
app.use((0, morgan_1.default)('dev'));
app.get("/health", (_req, res) => {
    res.status(200).json({ ok: true });
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
