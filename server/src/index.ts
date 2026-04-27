import express from "express";
import cors from "cors";
import routes from "./routes/inspecciones.routes";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(
    cors({
        origin: ["http://localhost:5173", "http://localhost:5174"],
    })
);
app.use(express.json());
app.use("/api", routes);

app.get("/health", (_req, res) => {
    res.status(200).json({ ok: true });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
