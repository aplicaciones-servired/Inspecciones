import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import { dbInspecciones, dbInspeccionesYum } from "../db/dabase.inspeciones";

export class Botiquin extends Model<
    InferAttributes<Botiquin>,
    InferCreationAttributes<Botiquin>
> {
    declare id: number;
    declare fecha_inspeccion: Date;
    declare responsable_inspeccion: string;
    declare responsable_documento: string;
    declare lugar_inspeccion: string;
    declare pregunta1: string;
    declare ubicacion1: string;
    declare capacidad1: string;
    declare observacion1: string | null;
    declare pregunta2: string;
    declare ubicacion2: string;
    declare capacidad2: string;
    declare observacion2: string | null;
    declare pregunta3: string;
    declare ubicacion3: string;
    declare capacidad3: string;
    declare observacion3: string | null;
    declare pregunta4: string;
    declare ubicacion4: string;
    declare capacidad4: string;
    declare observacion4: string | null;
    declare pregunta5: string;
    declare ubicacion5: string;
    declare capacidad5: string;
    declare observacion5: string | null;
    declare pregunta6: string;
    declare ubicacion6: string;
    declare capacidad6: string;
    declare observacion6: string | null;
    declare pregunta7: string;
    declare ubicacion7: string;
    declare capacidad7: string;
    declare observacion7: string | null;
    declare pregunta8: string;
    declare ubicacion8: string;
    declare capacidad8: string;
    declare observacion8: string | null;
    declare pregunta9: string;
    declare ubicacion9: string;
    declare capacidad9: string;
    declare observacion9: string | null;
    declare pregunta10: string;
    declare ubicacion10: string;
    declare capacidad10: string;
    declare observacion10: string | null;
    declare pregunta11: string;
    declare ubicacion11: string;
    declare capacidad11: string;
    declare observacion11: string | null;
    declare pregunta12: string;
    declare ubicacion12: string;
    declare capacidad12: string;
    declare observacion12: string | null;
    declare pregunta13: string;
    declare ubicacion13: string;
    declare capacidad13: string;
    declare observacion13: string | null;
    declare pregunta14: string;
    declare ubicacion14: string;
    declare capacidad14: string;
    declare observacion14: string | null;
    declare pregunta15: string;
    declare ubicacion15: string;
    declare capacidad15: string;
    declare observacion15: string | null;
    declare pregunta16: string;
    declare ubicacion16: string;
    declare capacidad16: string;
    declare observacion16: string | null;
    declare nota: string | null;
}

let initializedFor: Sequelize | null = null;

export function initBotiquin(zona: string): typeof Botiquin {
    const sequelize = zona === "Multired" ? dbInspecciones : dbInspeccionesYum;

    if (initializedFor !== sequelize) {
        Botiquin.init(
            {
                id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
                responsable_inspeccion: { type: DataTypes.STRING(80), allowNull: false },
                responsable_documento: { type: DataTypes.STRING(80), allowNull: false },
                lugar_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
                pregunta1: { type: DataTypes.STRING(100), allowNull: false },
                ubicacion1: { type: DataTypes.STRING(60), allowNull: false },
                capacidad1: { type: DataTypes.STRING(60), allowNull: false },
                observacion1: { type: DataTypes.STRING(60), allowNull: true },
                pregunta2: { type: DataTypes.STRING(80), allowNull: false },
                ubicacion2: { type: DataTypes.STRING(60), allowNull: false },
                capacidad2: { type: DataTypes.STRING(60), allowNull: false },
                observacion2: { type: DataTypes.STRING(60), allowNull: true },
                pregunta3: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion3: { type: DataTypes.STRING(60), allowNull: false },
                capacidad3: { type: DataTypes.STRING(60), allowNull: false },
                observacion3: { type: DataTypes.STRING(60), allowNull: true },
                pregunta4: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion4: { type: DataTypes.STRING(60), allowNull: false },
                capacidad4: { type: DataTypes.STRING(60), allowNull: false },
                observacion4: { type: DataTypes.STRING(60), allowNull: true },
                pregunta5: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion5: { type: DataTypes.STRING(60), allowNull: false },
                capacidad5: { type: DataTypes.STRING(60), allowNull: false },
                observacion5: { type: DataTypes.STRING(60), allowNull: true },
                pregunta6: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion6: { type: DataTypes.STRING(60), allowNull: false },
                capacidad6: { type: DataTypes.STRING(60), allowNull: false },
                observacion6: { type: DataTypes.STRING(60), allowNull: true },
                pregunta7: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion7: { type: DataTypes.STRING(60), allowNull: false },
                capacidad7: { type: DataTypes.STRING(60), allowNull: false },
                observacion7: { type: DataTypes.STRING(60), allowNull: true },
                pregunta8: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion8: { type: DataTypes.STRING(60), allowNull: false },
                capacidad8: { type: DataTypes.STRING(60), allowNull: false },
                observacion8: { type: DataTypes.STRING(60), allowNull: true },
                pregunta9: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion9: { type: DataTypes.STRING(60), allowNull: false },
                capacidad9: { type: DataTypes.STRING(60), allowNull: false },
                observacion9: { type: DataTypes.STRING(60), allowNull: true },
                pregunta10: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion10: { type: DataTypes.STRING(60), allowNull: false },
                capacidad10: { type: DataTypes.STRING(60), allowNull: false },
                observacion10: { type: DataTypes.STRING(60), allowNull: true },
                pregunta11: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion11: { type: DataTypes.STRING(60), allowNull: false },
                capacidad11: { type: DataTypes.STRING(60), allowNull: false },
                observacion11: { type: DataTypes.STRING(60), allowNull: true },
                pregunta12: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion12: { type: DataTypes.STRING(60), allowNull: false },
                capacidad12: { type: DataTypes.STRING(60), allowNull: false },
                observacion12: { type: DataTypes.STRING(60), allowNull: true },
                pregunta13: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion13: { type: DataTypes.STRING(60), allowNull: false },
                capacidad13: { type: DataTypes.STRING(60), allowNull: false },
                observacion13: { type: DataTypes.STRING(60), allowNull: true },
                pregunta14: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion14: { type: DataTypes.STRING(60), allowNull: false },
                capacidad14: { type: DataTypes.STRING(60), allowNull: false },
                observacion14: { type: DataTypes.STRING(60), allowNull: true },
                pregunta15: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion15: { type: DataTypes.STRING(60), allowNull: false },
                capacidad15: { type: DataTypes.STRING(60), allowNull: false },
                observacion15: { type: DataTypes.STRING(60), allowNull: true },
                pregunta16: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion16: { type: DataTypes.STRING(60), allowNull: false },
                capacidad16: { type: DataTypes.STRING(60), allowNull: false },
                observacion16: { type: DataTypes.STRING(60), allowNull: true },
                nota: { type: DataTypes.STRING(100), allowNull: true },
            },
            {
                sequelize,
                tableName: "inspeccion_botiquin",
                timestamps: false,
            }
        );

        initializedFor = sequelize;
    }

    return Botiquin;
}
