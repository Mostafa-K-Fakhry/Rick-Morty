import express from "express";

import { showLocations ,showLocationDetails } from "../controllers/location.controller.js";

const router = express.Router();

router.get("/locations", showLocations);
router.get("/locations/:id", showLocationDetails);

export default router;