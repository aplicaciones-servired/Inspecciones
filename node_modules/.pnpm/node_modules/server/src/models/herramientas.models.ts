import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from "sequelize";
import { dbInspecciones, dbInspeccionesYum } from "../db/dabase.inspeciones";

export class Herramientas extends Model<
    InferAttributes<Herramientas>,
    InferCreationAttributes<Herramientas>
> {
    declare id: number;
    declare fecha_inspeccion: Date;
    declare responsable_inspeccion: string;
    declare pregunta1: string;
    declare pregunta2: string;
    declare pregunta3: string;
    declare pregunta4: string;
    declare pregunta5: string;
    declare pregunta6: string;
    declare pregunta7: string;
    declare pregunta8: string;
    declare pregunta9: string;
    declare pregunta10: string;
    declare pregunta11: string;
    declare pregunta12: string;
    declare pregunta13: string;
    declare pregunta14: string;
    declare pregunta15: string;
    declare pregunta16: string;
    declare pregunta17: string;
    declare pregunta18: string;
    declare pregunta19: string;
    declare pregunta20: string;
    declare pregunta21: string;
    declare pregunta22: string;
    declare pregunta23: string;
    declare pregunta24: string;
    declare pregunta25: string;
    declare pregunta26: string;
    declare pregunta27: string;
    declare pregunta28: string;
    declare pregunta29: string;
    declare pregunta30: string;
    declare pregunta31: string;
    declare pregunta32: string;
    declare pregunta33: string;
    declare pregunta34: string;
    declare pregunta35: string;
    declare pregunta36: string;
    declare pregunta37: string;
    declare pregunta38: string;
    declare pregunta39: string;
    declare pregunta40: string;
    declare pregunta41: string;
    declare pregunta42: string;
    declare pregunta43: string;
    declare pregunta44: string;
    declare observaciones: string | null;
}

let initializedFor: Sequelize | null = null;

export function initHerramientas(zona: string): typeof Herramientas {
    const sequelize = zona === "Multired" ? dbInspecciones : dbInspeccionesYum;

    if (initializedFor !== sequelize) {
        Herramientas.init(
            {
                id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
                fecha_inspeccion: { type: DataTypes.DATEONLY, allowNull: false },
                responsable_inspeccion: { type: DataTypes.STRING(250), allowNull: false },
                pregunta1: { type: DataTypes.STRING(60), allowNull: false },
                pregunta2: { type: DataTypes.STRING(60), allowNull: false },
                pregunta3: { type: DataTypes.STRING(60), allowNull: false },
                pregunta4: { type: DataTypes.STRING(60), allowNull: false },
                pregunta5: { type: DataTypes.STRING(60), allowNull: false },
                pregunta6: { type: DataTypes.STRING(60), allowNull: false },
                pregunta7: { type: DataTypes.STRING(60), allowNull: false },
                pregunta8: { type: DataTypes.STRING(60), allowNull: false },
                pregunta9: { type: DataTypes.STRING(60), allowNull: false },
                pregunta10: { type: DataTypes.STRING(60), allowNull: false },
                pregunta11: { type: DataTypes.STRING(60), allowNull: false },
                pregunta12: { type: DataTypes.STRING(60), allowNull: false },
                pregunta13: { type: DataTypes.STRING(60), allowNull: false },
                pregunta14: { type: DataTypes.STRING(60), allowNull: false },
                pregunta15: { type: DataTypes.STRING(60), allowNull: false },
                pregunta16: { type: DataTypes.STRING(60), allowNull: false },
                pregunta17: { type: DataTypes.STRING(60), allowNull: false },
                pregunta18: { type: DataTypes.STRING(60), allowNull: false },
                pregunta19: { type: DataTypes.STRING(60), allowNull: false },
                pregunta20: { type: DataTypes.STRING(60), allowNull: false },
                pregunta21: { type: DataTypes.STRING(60), allowNull: false },
                pregunta22: { type: DataTypes.STRING(60), allowNull: false },
                pregunta23: { type: DataTypes.STRING(60), allowNull: false },
                pregunta24: { type: DataTypes.STRING(60), allowNull: false },
                pregunta25: { type: DataTypes.STRING(60), allowNull: false },
                pregunta26: { type: DataTypes.STRING(60), allowNull: false },
                pregunta27: { type: DataTypes.STRING(60), allowNull: false },
                pregunta28: { type: DataTypes.STRING(60), allowNull: false },
                pregunta29: { type: DataTypes.STRING(60), allowNull: false },
                pregunta30: { type: DataTypes.STRING(60), allowNull: false },
                pregunta31: { type: DataTypes.STRING(60), allowNull: false },
                pregunta32: { type: DataTypes.STRING(60), allowNull: false },
                pregunta33: { type: DataTypes.STRING(60), allowNull: false },
                pregunta34: { type: DataTypes.STRING(60), allowNull: false },
                pregunta35: { type: DataTypes.STRING(60), allowNull: false },
                pregunta36: { type: DataTypes.STRING(60), allowNull: false },
                pregunta37: { type: DataTypes.STRING(60), allowNull: false },
                pregunta38: { type: DataTypes.STRING(60), allowNull: false },
                pregunta39: { type: DataTypes.STRING(60), allowNull: false },
                pregunta40: { type: DataTypes.STRING(60), allowNull: false },
                pregunta41: { type: DataTypes.STRING(60), allowNull: false },
                pregunta42: { type: DataTypes.STRING(60), allowNull: false },
                pregunta43: { type: DataTypes.STRING(60), allowNull: false },
                pregunta44: { type: DataTypes.STRING(60), allowNull: false },
                observaciones: { type: DataTypes.STRING(600), allowNull: true },
            },
            {
                sequelize,
                tableName: "inspeccion_herramientas",
                timestamps: false,
            }
        );

        initializedFor = sequelize;
    }

    return Herramientas;
}
