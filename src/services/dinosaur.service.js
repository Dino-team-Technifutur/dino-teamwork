import db from '../database/index.js';

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
};

export default dinosaurService;