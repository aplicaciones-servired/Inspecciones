import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { dbInspeccionesAdmin } from "../db/dabase.inspeciones";

export class SeguimientoLogin extends Model<
  InferAttributes<SeguimientoLogin>,
  InferCreationAttributes<SeguimientoLogin>
> {
  declare id: number;
  declare cedula: string;
  declare nombre: string;
  declare empresa: string;
  declare fecha: Date;
}

SeguimientoLogin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cedula: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    empresa: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: dbInspeccionesAdmin,
    tableName: "seguimiento_login",
    timestamps: false,
  }
);
