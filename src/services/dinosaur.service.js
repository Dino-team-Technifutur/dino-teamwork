import db from '../database/index.js'
import {InvalidDinosaurError} from '../custom-errors/dinosaur.error.js';

const dinosaurService = {
  delete : async (dinosaurId) => {
    const dinosaur = await db.Dinosaur.findByPk(dinosaurId);
    if (!dinosaur) {
      throw new InvalidDinosaurError();
    }
    await db.Dinosaur.destroy(dinosaurId);
  }
}

export default dinosaurService;