import db from '../database/index.js'
import {InvalidSpeciesError} from '../custom-errors/species.error.js';

const speciesService = {
    getAll: async () => {
        return await db.Species.findAll();
    },
    create: async(data) => {
        const existingSpecies = await db.Species.findOne
        ({
            where:{
                name: data.name
            },
            })
            if (existingSpecies){
                throw new InvalidSpeciesError();
            }  
    },
  delete : async (speciesId) => {
    const species = await db.Species.findByPk(speciesId);
    if (!species) {
      throw new InvalidSpeciesError();
    }
    await db.Species.destroy(speciesId);
  }
};

export default speciesService;