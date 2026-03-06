import { Router } from "express";
import dinosaurController from "../controllers/dinosaur.controller.js";
import { queryValidator } from "../middlewares/validator.middleware.js";
import { createValidator } from "../validators/dinosaur.validator.js";

const dinosaurRouter = Router();

dinosaurRouter.get("/", dinosaurController.getAll);
dinosaurRouter.post(
	"/",
	queryValidator(createValidator),
	dinosaurController.create,
);
dinosaurRouter.delete("/:id", dinosaurController.delete);

export default dinosaurRouter;
