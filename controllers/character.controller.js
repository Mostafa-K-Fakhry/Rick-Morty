import {
    getCharacters,
    getCharacterById,
    getEpisodesByUrls
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


        let episodes = [];

        if (character.episode.length > 0) {

            try {

                episodes = await getEpisodesByUrls(
                    character.episode.slice(0, 6)
                );

            } catch (error) {

                console.log(
                    "Failed to load character episodes:",
                    error.message
                );

            }

        }


        res.render("pages/character-details", {
            character,
            originId,
            locationId,
            episodes
        });

    } catch (error) {

        console.log(
            "Failed to load character:",
            error.message
        );

        res.status(404).render(
            "pages/character-not-found"
        );

    }

};


export {
    showCharacters,
    showCharacterDetails
};