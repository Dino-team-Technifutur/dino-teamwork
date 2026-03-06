import db from '../database/index.js'
import {InvalidDinosaurError} from '../custom-errors/dinosaur.error.js';

const dinosaurService = {
    getAll: async () => {
        return await db.Dinosaur.findAll();
    },
    create: async(data) => {
        const existingDinosaur = await db.Dinosaur.findOne
        ({
            where:{
                name: data.name
            },
            })
            if (existingDinosaur){
                throw new InvalidDinosaurError();
            }  
    },
  delete : async (dinosaurId) => {
    const dinosaur = await db.Dinosaur.findByPk(dinosaurId);
    if (!dinosaur) {
      throw new InvalidDinosaurError();
    }
    await db.Dinosaur.destroy(dinosaurId);
  }
};

export default dinosaurService;