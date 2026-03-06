import sequelize from "./config.js";
import Dinosaur from "./entities/dinosaur.entity.js";
import Fossil from "./entities/fossil.entity.js";
import Species from "./entities/species.entity.js";
import Zone from "./entities/zone.entity.js";

Zone.belongsToMany(Species, {
	as: "Species",
	through: "species_zones",
	foreignKey: "ZoneId",
	otherKey: "SpeciesId",
});
Species.hasMany(Dinosaur, {
	as: "Dinosaur",
});

Dinosaur.belongsTo(Species, {
	foreignKey: "dinosaurId",
	as: "species",
});

Dinosaur.hasMany(Fossil, {
	foreignKey: "dinosaurId",
	as: "fossils",
});

Species.belongsToMany(Zone, {
	through: "species_zones",
	foreignKey: "SpeciesId",
	otherKey: "ZoneId",
	as: "Zone",
});

Fossil.belongsTo(Dinosaur, {
	as: "dinosaur",
	foreignKey: {
		allowNull: true,
		name: "dinosaurId",
	},
});

export default {
	Dinosaur,
	Fossil,
	Species,
	Zone,
	sequelize,
};
