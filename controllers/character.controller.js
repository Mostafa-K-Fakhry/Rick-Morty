import {
    getCharacters,
    getCharacterById
} from "../services/apiService.js";


const showCharacters = async (req, res) => {

    const filters = req.query;

    const data = await getCharacters(filters);

    res.render("pages/characters", {
        characters: data.results,
        info: data.info,
        filters
    });

};


const showCharacterDetails = async (req, res) => {

    const { id } = req.params;

    const character = await getCharacterById(id);

    res.render("pages/character-details", {
        character
    });

};


export {
    showCharacters,
    showCharacterDetails
};