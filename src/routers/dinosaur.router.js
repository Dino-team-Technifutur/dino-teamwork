import { Router } from "express";
import dinosaurController from "../controllers/dinosaur.controller.js";

const dinosaurRouter = Router();

dinosaurRouter.get("/", dinosaurController.getAll);
dinosaurRouter.post("/", dinosaurController.create);
dinosaurRouter.delete("/:id", dinosaurController.delete);

export default dinosaurRouter;
