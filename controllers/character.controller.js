import {
    getCharacters,
    getCharacterById
} from "../services/apiService.js";


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

        res.render("pages/character-details", {
            character
        });

    } catch (error) {

        res.status(404).render("pages/character-not-found");

    }

};


export {
    showCharacters,
    showCharacterDetails
};