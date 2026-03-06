import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Zone = sequelize.define("Zone", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: true,
	},
});
export default Zone;
