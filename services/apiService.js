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

const getLocations = async (filters = {}) => {

    const response = await axios.get(
        `${API_URL}/location`,
        {
            params: filters
        }
    );

    return response.data;
};

const getLocationById = async (id) => {

    const response = await axios.get(
        `${API_URL}/location/${id}`
    );

    return response.data;
};

const getCharactersByUrls = async (urls) => {

    if (!urls || urls.length === 0) {
        return [];
    }

    const ids = urls.map((url) =>
        url.split("/").pop()
    );

    const response = await axios.get(
        `${API_URL}/character/${ids.join(",")}`
    );

    return Array.isArray(response.data)
        ? response.data
        : [response.data];
};

export {
    getCharacters,
    getCharacterById,
    getLocations,
    getLocationById,
    getCharactersByUrls
};