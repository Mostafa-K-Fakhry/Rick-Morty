import {
    getCharacters,
    getCharacterById
} from "../services/apiService.js";

import { getIdFromUrl } from "../utils/url.util.js";


const showCharacters = async (req, res) => {

    const filters = req.query;

    try {

        const data = await getCharacters(filters);

        res.render("pages/characters", {
            characters: data.results,
            info: data.info,
            filters,
            error: null
        });

    } catch (error) {

        res.render("pages/characters", {
            characters: [],
            info: null,
            filters,
            error: "No characters found."
        });

    }

};


const showCharacterDetails = async (req, res) => {

    const { id } = req.params;

    try {

        const character = await getCharacterById(id);

        const originId = getIdFromUrl(
            character.origin.url
        );

        const locationId = getIdFromUrl(
            character.location.url
        );

        res.render("pages/character-details", {
            character,
            originId,
            locationId
        });

    } catch (error) {

        res.status(404).render(
            "pages/character-not-found"
        );

    }

};


export {
    showCharacters,
    showCharacterDetails
};