import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import { dbInspecciones, dbInspeccionesYum } from "../db/dabase.inspeciones";

export class Protecion extends Model<
    InferAttributes<Protecion>,
    InferCreationAttributes<Protecion>
> {
    declare id: number;
    declare fecha_inspeccion: Date;
    declare responsable_inspeccion: string;
    declare lugar: string;
    declare cargo: string;
    declare pregunta1: string;
    declare observacion1: string | null;
    declare pregunta2: string;
    declare observacion2: string | null;
    declare pregunta3: string;
    declare observacion3: string | null;
    declare pregunta4: string;
    declare observacion4: string | null;
    declare pregunta5: string;
    declare observacion5: string | null;
    declare pregunta6: string;
    declare observacion6: string | null;
    declare pregunta7: string;
    declare observacion7: string | null;
    declare pregunta8: string;
    declare observacion8: string | null;
    declare pregunta9: string;
    declare observacion9: string | null;
    declare pregunta10: string;
    declare observacion10: string | null;
    declare pregunta11: string;
    declare observacion11: string | null;
    declare pregunta12: string;
    declare observacion12: string | null;
    declare pregunta13: string;
    declare observacion13: string | null;
    declare pregunta14: string;
    declare observacion14: string | null;
    declare pregunta15: string;
    declare observacion15: string | null;
    declare pregunta16: string;
    declare observacion16: string | null;
}

let initializedFor: Sequelize | null = null;

export function initProtecion(zona: string): typeof Protecion {
    const sequelize = zona === "Multired" ? dbInspecciones : dbInspeccionesYum;

    if (initializedFor !== sequelize) {
        Protecion.init(
            {
                id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
                responsable_inspeccion: { type: DataTypes.STRING(250), allowNull: false },
                lugar: { type: DataTypes.STRING(250), allowNull: false },
                cargo: { type: DataTypes.STRING(250), allowNull: false },
                pregunta1: { type: DataTypes.STRING(60), allowNull: false },
                observacion1: { type: DataTypes.STRING(60), allowNull: true },
                pregunta2: { type: DataTypes.STRING(60), allowNull: false },
                observacion2: { type: DataTypes.STRING(60), allowNull: true },
                pregunta3: { type: DataTypes.STRING(60), allowNull: false },
                observacion3: { type: DataTypes.STRING(60), allowNull: true },
                pregunta4: { type: DataTypes.STRING(60), allowNull: false },
                observacion4: { type: DataTypes.STRING(60), allowNull: true },
                pregunta5: { type: DataTypes.STRING(60), allowNull: false },
                observacion5: { type: DataTypes.STRING(60), allowNull: true },
                pregunta6: { type: DataTypes.STRING(60), allowNull: false },
                observacion6: { type: DataTypes.STRING(60), allowNull: true },
                pregunta7: { type: DataTypes.STRING(60), allowNull: false },
                observacion7: { type: DataTypes.STRING(60), allowNull: true },
                pregunta8: { type: DataTypes.STRING(60), allowNull: false },
                observacion8: { type: DataTypes.STRING(60), allowNull: true },
                pregunta9: { type: DataTypes.STRING(60), allowNull: false },
                observacion9: { type: DataTypes.STRING(60), allowNull: true },
                pregunta10: { type: DataTypes.STRING(60), allowNull: false },
                observacion10: { type: DataTypes.STRING(60), allowNull: true },
                pregunta11: { type: DataTypes.STRING(60), allowNull: false },
                observacion11: { type: DataTypes.STRING(60), allowNull: true },
                pregunta12: { type: DataTypes.STRING(60), allowNull: false },
                observacion12: { type: DataTypes.STRING(60), allowNull: true },
                pregunta13: { type: DataTypes.STRING(60), allowNull: false },
                observacion13: { type: DataTypes.STRING(60), allowNull: true },
                pregunta14: { type: DataTypes.STRING(60), allowNull: false },
                observacion14: { type: DataTypes.STRING(60), allowNull: true },
                pregunta15: { type: DataTypes.STRING(60), allowNull: false },
                observacion15: { type: DataTypes.STRING(60), allowNull: true },
                pregunta16: { type: DataTypes.STRING(60), allowNull: false },
                observacion16: { type: DataTypes.STRING(60), allowNull: true },
            },
            {
                sequelize,
                tableName: "inspeccion_proteccion",
                timestamps: false,
            }
        );

        initializedFor = sequelize;
    }

    return Protecion;
}
