import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import { dbInspecciones, dbInspeccionesYum } from "../db/dabase.inspeciones";

export class Extintores extends Model<
    InferAttributes<Extintores>,
    InferCreationAttributes<Extintores>
> {
    declare id: number;
    declare fecha_inspeccion: Date;
    declare responsable_inspeccion: string;
    declare responsable_documento: string;
    declare lugar_inspeccion: string;
    declare numero: string;
    declare tipo: string;
    declare ubicacion: string;
    declare capacidad: string;
    declare proxima_recarga: Date;
    declare golpes: string;
    declare manometro: string;
    declare pasador_seguridad: string;
    declare manguera: string;
    declare boquilla: string;
    declare manija: string;
    declare cilindro: string;
    declare pintura: string;
    declare senalizacion: string;
    declare acceso: string;
    declare visibilidad: string;
    declare observacion: string | null;
    declare recomendaciones: string | null;
}

let initializedFor: Sequelize | null = null;

export function initExtintores(zona: string): typeof Extintores {
    const sequelize = zona === "Multired" ? dbInspecciones : dbInspeccionesYum;

    if (initializedFor !== sequelize) {
        Extintores.init(
            {
                id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
                responsable_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
                responsable_documento: { type: DataTypes.STRING(60), allowNull: false },
                lugar_inspeccion: { type: DataTypes.STRING(60), allowNull: false },
                numero: { type: DataTypes.STRING(60), allowNull: false },
                tipo: { type: DataTypes.STRING(60), allowNull: false },
                ubicacion: { type: DataTypes.STRING(60), allowNull: false, field: "ubicación" },
                capacidad: { type: DataTypes.STRING(60), allowNull: false },
                proxima_recarga: { type: DataTypes.DATEONLY, allowNull: false },
                golpes: { type: DataTypes.STRING(60), allowNull: false },
                manometro: { type: DataTypes.STRING(60), allowNull: false, field: "manómetro" },
                pasador_seguridad: { type: DataTypes.STRING(60), allowNull: false },
                manguera: { type: DataTypes.STRING(60), allowNull: false },
                boquilla: { type: DataTypes.STRING(60), allowNull: false },
                manija: { type: DataTypes.STRING(60), allowNull: false },
                cilindro: { type: DataTypes.STRING(60), allowNull: false },
                pintura: { type: DataTypes.STRING(60), allowNull: false },
                senalizacion: { type: DataTypes.STRING(60), allowNull: false, field: "señalización" },
                acceso: { type: DataTypes.STRING(60), allowNull: false },
                visibilidad: { type: DataTypes.STRING(60), allowNull: false },
                observacion: { type: DataTypes.STRING(60), allowNull: true },
                recomendaciones: { type: DataTypes.STRING(60), allowNull: true },
            },
            {
                sequelize,
                tableName: "inspeccion_extintores",
                timestamps: false,
            }
        );

        initializedFor = sequelize;
    }

    return Extintores;
}
