import {
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from "sequelize";
import { dbloguin } from "../db/dabase.inspeciones";

export class Loguin extends Model<
	InferAttributes<Loguin>,
	InferCreationAttributes<Loguin>
> {
	declare id: number;
	declare login: string;
	declare pass: string;
	declare nombre: string;
	declare perfil: string;
	declare activo: boolean;
	declare imei: string;
}

Loguin.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		login: {
			type: DataTypes.STRING(35),
			allowNull: false,
		},
		pass: {
			type: DataTypes.STRING(35),
			allowNull: false,
		},
		nombre: {
			type: DataTypes.STRING(35),
			allowNull: false,
		},
		perfil: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		activo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		imei: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
	},
	{
		sequelize: dbloguin,
		tableName: "tbusuario",
		timestamps: false,
	}
);
