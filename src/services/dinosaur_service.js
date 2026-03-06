import db from "../database/index.js";

const dinosaurService = {
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
}
};
