import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import { dbInspecciones, dbInspeccionesYum } from "../db/dabase.inspeciones";

export class Camilla extends Model<
    InferAttributes<Camilla>,
    InferCreationAttributes<Camilla>
> {
    declare id: number;
    declare fecha_inspeccion: Date;
    declare responsable_inspeccion: string;
    declare lugar: string;
    declare ubicacion: string;
    declare senalizacion: string;
    declare aceso: string;
    declare estado: string;
    declare instalacion: string;
    declare correas: string;
    declare inmovilizador: string;
    declare observacion: string | null;
    declare ubicacion1: string | null;
    declare senalizacion1: string | null;
    declare aceso1: string | null;
    declare estado1: string | null;
    declare instalacion1: string | null;
    declare correas1: string | null;
    declare inmovilizador1: string | null;
    declare observacion1: string | null;
}

let initializedFor: Sequelize | null = null;

export function initCamilla(zona: string): typeof Camilla {
    const sequelize = zona === "Multired" ? dbInspecciones : dbInspeccionesYum;

    if (initializedFor !== sequelize) {
        Camilla.init(
            {
                id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
                responsable_inspeccion: { type: DataTypes.STRING(250), allowNull: false },
                lugar: { type: DataTypes.STRING(250), allowNull: false },
                ubicacion: { type: DataTypes.STRING(250), allowNull: false },
                senalizacion: { type: DataTypes.STRING(250), allowNull: false },
                aceso: { type: DataTypes.STRING(250), allowNull: false },
                estado: { type: DataTypes.STRING(250), allowNull: false },
                instalacion: { type: DataTypes.STRING(250), allowNull: false },
                correas: { type: DataTypes.STRING(250), allowNull: false },
                inmovilizador: { type: DataTypes.STRING(250), allowNull: false },
                observacion: { type: DataTypes.STRING(250), allowNull: true },
                ubicacion1: { type: DataTypes.STRING(250), allowNull: true },
                senalizacion1: { type: DataTypes.STRING(250), allowNull: true },
                aceso1: { type: DataTypes.STRING(250), allowNull: true },
                estado1: { type: DataTypes.STRING(250), allowNull: true },
                instalacion1: { type: DataTypes.STRING(250), allowNull: true },
                correas1: { type: DataTypes.STRING(250), allowNull: true },
                inmovilizador1: { type: DataTypes.STRING(250), allowNull: true },
                observacion1: { type: DataTypes.STRING(250), allowNull: true },
            },
            {
                sequelize,
                tableName: "inspeccion_camilla",
                timestamps: false,
            }
        );

        initializedFor = sequelize;
    }

    return Camilla;
}
