import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Dinosaur = sequelize.define("Dinosaur", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	diet: {
		type: DataTypes.STRING,
		allowNull: true,
		validate: {
			isIn: [["vegetarian", "carnivore", "omnivore"]],
		},
	},
	period: {
		type: DataTypes.STRING,
		allowNull: true,
		validate: {
			isIn: [["Triassic", "Jurassic", "Cretaceous"]],
		},
	},
});

export default Dinosaur;