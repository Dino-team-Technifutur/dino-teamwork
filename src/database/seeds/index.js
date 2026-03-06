import "console-separator";
import "dotenv/config";
import db from "../index.js";
import { speciesData } from "./species.seed.js";
import { zoneData } from "./zone.seed.js";

async function runSeed() {
	try {
		await db.sequelize.authenticate();
		console.alog(`Supabase connexion established`);
		await db.sequelize.sync({ force: true });

		await db.Species.bulkCreate(speciesData);
		await db.Zone.bulkCreate(zoneData);

		console.alog("The seeds are all planted");
	} catch (error) {
		console.elog(error);
	} finally {
		await db.sequelize.close();
		// process.exit();
	}
}

runSeed();
