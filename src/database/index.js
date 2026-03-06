import sequelize from './config.js';
import Dinosaur from './entities/dinosaur.entity.js'
import Fossil from './entities/fossil.entity.js'
import Species from './entities/species.entity.js';
import Zone from './entities/zone.entity.js';

Dinosaur.hasOne(Species, {
  foreignKey: 'dinosaurId',
  as: 'species'
})

Dinosaur.hasMany(Fossil, {
  foreignKey: 'dinosaurId',
  as: 'fossils'
})



export {
  Dinosaur,
  Fossil,
  Species,
  Zone,
  sequelize
}
