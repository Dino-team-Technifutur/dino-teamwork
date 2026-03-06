import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Species = sequelize.define("Species", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export default Species;
