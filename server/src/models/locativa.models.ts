import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import { dbInspecciones, dbInspeccionesYum } from "../db/dabase.inspeciones";

export class Locativa extends Model<
    InferAttributes<Locativa>,
    InferCreationAttributes<Locativa>
> {
    declare id: number;
    declare fecha_inspeccion: Date;
    declare responsable_inspeccion: string;
    declare responsable_documento: string;
    declare lugar_inspeccion: string;
    declare pregunta1: string;
    declare calificacion1: string;
    declare observacion1: string | null;
    declare pregunta2: string;
    declare calificacion2: string;
    declare observacion2: string | null;
    declare pregunta3: string;
    declare calificacion3: string;
    declare observacion3: string | null;
    declare pregunta4: string;
    declare calificacion4: string;
    declare observacion4: string | null;
    declare pregunta5: string;
    declare calificacion5: string;
    declare observacion5: string | null;
    declare pregunta6: string;
    declare calificacion6: string;
    declare observacion6: string | null;
    declare pregunta7: string;
    declare calificacion7: string;
    declare observacion7: string | null;
    declare pregunta8: string;
    declare calificacion8: string;
    declare observacion8: string | null;
    declare pregunta9: string;
    declare calificacion9: string;
    declare observacion9: string | null;
    declare pregunta10: string;
    declare calificacion10: string;
    declare observacion10: string | null;
    declare pregunta11: string;
    declare calificacion11: string;
    declare observacion11: string | null;
    declare pregunta12: string;
    declare calificacion12: string;
    declare observacion12: string | null;
    declare imagen_observacion: Buffer;
}

let initializedFor: Sequelize | null = null;

export function initLocativa(zona: string): typeof Locativa {
    const sequelize = zona === "Multired" ? dbInspecciones : dbInspeccionesYum;

    if (initializedFor !== sequelize) {
        Locativa.init(
            {
                id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
                responsable_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
                responsable_documento: { type: DataTypes.STRING(60), allowNull: false },
                lugar_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
                pregunta1: { type: DataTypes.STRING(500), allowNull: false },
                calificacion1: { type: DataTypes.STRING(60), allowNull: false },
                observacion1: { type: DataTypes.STRING(60), allowNull: true },
                pregunta2: { type: DataTypes.STRING(500), allowNull: false },
                calificacion2: { type: DataTypes.STRING(60), allowNull: false },
                observacion2: { type: DataTypes.STRING(60), allowNull: true },
                pregunta3: { type: DataTypes.STRING(500), allowNull: false },
                calificacion3: { type: DataTypes.STRING(60), allowNull: false },
                observacion3: { type: DataTypes.STRING(60), allowNull: true },
                pregunta4: { type: DataTypes.STRING(500), allowNull: false },
                calificacion4: { type: DataTypes.STRING(60), allowNull: false },
                observacion4: { type: DataTypes.STRING(60), allowNull: true },
                pregunta5: { type: DataTypes.STRING(500), allowNull: false },
                calificacion5: { type: DataTypes.STRING(60), allowNull: false },
                observacion5: { type: DataTypes.STRING(60), allowNull: true },
                pregunta6: { type: DataTypes.STRING(500), allowNull: false },
                calificacion6: { type: DataTypes.STRING(60), allowNull: false },
                observacion6: { type: DataTypes.STRING(60), allowNull: true },
                pregunta7: { type: DataTypes.STRING(500), allowNull: false },
                calificacion7: { type: DataTypes.STRING(60), allowNull: false },
                observacion7: { type: DataTypes.STRING(60), allowNull: true },
                pregunta8: { type: DataTypes.STRING(500), allowNull: false },
                calificacion8: { type: DataTypes.STRING(60), allowNull: false },
                observacion8: { type: DataTypes.STRING(60), allowNull: true },
                pregunta9: { type: DataTypes.STRING(500), allowNull: false },
                calificacion9: { type: DataTypes.STRING(60), allowNull: false },
                observacion9: { type: DataTypes.STRING(60), allowNull: true },
                pregunta10: { type: DataTypes.STRING(500), allowNull: false },
                calificacion10: { type: DataTypes.STRING(60), allowNull: false },
                observacion10: { type: DataTypes.STRING(60), allowNull: true },
                pregunta11: { type: DataTypes.STRING(500), allowNull: false },
                calificacion11: { type: DataTypes.STRING(60), allowNull: false },
                observacion11: { type: DataTypes.STRING(60), allowNull: true },
                pregunta12: { type: DataTypes.STRING(500), allowNull: false },
                calificacion12: { type: DataTypes.STRING(60), allowNull: false },
                observacion12: { type: DataTypes.STRING(60), allowNull: true },
                imagen_observacion: { type: DataTypes.BLOB, allowNull: false },
            },
            {
                sequelize,
                tableName: "inspeccion_locativa",
                timestamps: false,
            }
        );

        initializedFor = sequelize;
    }

    return Locativa;
}
