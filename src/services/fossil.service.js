import db from '../database/index.js'
import {InvalidfossilError} from '../custom-errors/fossil.error.js';

const fossilService = {
    getAll: async () => {
        return await db.Fossil.findAll();
    },
    create: async(data) => {
        const existingfossil = await db.Fossil.findOne
        ({
            where:{
                name: data.name
            },
            })
            if (existingfossil){
                throw new InvalidFossilError();
            }  
    },
  delete : async (fossilId) => {
    const fossil = await db.Fossil.findByPk(fossilId);
    if (!fossil) {
      throw new InvalidFossilError();
    }
    await db.Fossil.destroy(fossilId);
  }
};

export default fossilService;