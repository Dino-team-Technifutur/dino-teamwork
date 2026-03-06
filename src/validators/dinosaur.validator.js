import z from "zod";

export const createValidator = z.object({
	name: z.string.min(2).max(50),
	diet: z.enum(["vegetarian", "carnivore", "omnivore"]).optional(),
	period: z.enum(["Triassic", "Jurassic", "Cretaceous"]).optional(),
});
