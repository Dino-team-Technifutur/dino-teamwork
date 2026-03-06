import db from '../database/index.js'
import {InvalidZoneError} from '../custom-errors/zone.error.js';

const zoneService = {
  getAll: async () => {
    return await db.Zone.findAll();
  },
  create: async(data) => {
    const existingZone = await db.Zone.findOne
    ({
      where:{
        name: data.name
      },
    })
    if (existingZone){
      throw new InvalidZoneError();
    }
  },
  delete : async (zoneId) => {
    const zone = await db.Zone.findByPk(zoneId);
    if (!zone) {
      throw new InvalidZoneError();
    }
    await db.Zone.destroy(zoneId);
  }
};

export default zoneService;