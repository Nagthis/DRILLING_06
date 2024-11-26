import { Router } from "express";
import { getAnimes, addAnime, getAnimesById, deleteAnime, updateAnime } from "../controllers/animesController.js";

const animesRoutes = Router();

animesRoutes.get("/", getAnimes);
animesRoutes.get("/:id", getAnimesById);
animesRoutes.delete("/:id", deleteAnime);
animesRoutes.post("/", addAnime);
animesRoutes.put("/:id", updateAnime);

export default animesRoutes;


