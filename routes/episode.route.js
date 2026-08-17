import express from "express";

import { showEpisodes , showEpisodeDetails} from "../controllers/episode.controller.js";

const router = express.Router();

router.get("/episodes", showEpisodes);
router.get("/episodes/:id",showEpisodeDetails);

export default router;