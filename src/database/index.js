import sequelize from './config.js';
import Dinosaur from './entities/dinosaur.entity.js'
import Fossil from './entities/fossil.entity.js'
import Species from './entities/species.entity.js';
import Zone from './entities/zone.entity.js';

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
  sequelize
}
