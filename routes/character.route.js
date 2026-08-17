import express from "express";

import {
    showCharacters,
    showCharacterDetails
} from "../controllers/character.controller.js";


const router = express.Router();


router.get("/characters", showCharacters);

router.get("/characters/:id", showCharacterDetails);


export default router;