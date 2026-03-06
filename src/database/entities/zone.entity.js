import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Zone = sequelize.define("Zone", {
	id: {
		type: DataTypes.INTEGER,
		autoIncement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: true,
	},
});
export default Zone;
