import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api";


const getCharacters = async (filters = {}) => {

    const response = await axios.get(
        `${API_URL}/character`,
        {
            params: filters
        }
    );

    return response.data;
};


const getCharacterById = async (id) => {

    const response = await axios.get(
        `${API_URL}/character/${id}`
    );

    return response.data;
};


export {
    getCharacters,
    getCharacterById
};