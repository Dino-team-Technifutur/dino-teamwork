import dinosaurService from "../services/dinosaur.service.js";

const dinosaurController = {
	create: async (req, res) => {
		const dinosaur = await dinosaurService.create(req.data);
		res.status(201).json({ dinosaur });
	},

	getAll: async (req, res) => {
		const dinosaurs = await dinosaurService.getAll();
		res.status(200).json({ data: dinosaurs });
	},

	delete: async (req, res) => {
		const { id } = req.params;
		const dinosaur = await dinosaurService.delete(id);
		res.status(200).json({ data: dinosaur });
	},
};
