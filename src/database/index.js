import sequelize from './config.js';
import Dinosaur from './entities/dinosaur.entity.js'
import Fossil from './entities/fossil.entity.js'
import Species from './entities/species.entity.js';
import Zone from './entities/zone.entity.js';

Species.hasMany(Dinosaur, {
  as: 'Dinosaur',
});

Dinosaur.hasOne(Species, {
  foreignKey: 'dinosaurId',
  as: 'species'
})

Dinosaur.hasMany(Fossil, {
  foreignKey: 'dinosaurId',
  as: 'fossils'
})

Species.belongsToMany(Zone, {
  through : 'species_zones',
  foreignKey: 'SpeciesId',
  otherKey: 'ZoneId',
  as: 'Zone',
});

export {
  Dinosaur,
  Fossil,
  Species,
  Zone,
  sequelize
}
