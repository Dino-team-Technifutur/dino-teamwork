import db from '../database/index.js';

const dinosaurService = {
    getAll: async () => {
        return await db.Dinosaur.findAll();
    },
};

export default dinosaurService;