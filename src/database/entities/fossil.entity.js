import { DataTypes } from "sequelize";
import sequelize from "../config.js";
 
const Fossil = sequelize.define("Fossil",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        discovery_location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discovery_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        preservation: {
            type: DataTypes.STRING,
        },
    },
    {}
);