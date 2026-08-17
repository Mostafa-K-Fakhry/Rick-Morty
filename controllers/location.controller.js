import { getLocations, getLocationById , getCharactersByUrls} from "../services/apiService.js";

const showLocations = async (req, res) => {

    const filters = req.query;

    try {

        const data = await getLocations(filters);

        res.render("pages/locations", {
            locations: data.results,
            info: data.info,
            filters,
            error: null
        });

    } catch (error) {

        res.render("pages/locations", {
            locations: [],
            info: null,
            filters,
            error: "No locations found."
        });

    }

};

const showLocationDetails = async (req, res) => {

    const { id } = req.params;

    try {

        const location = await getLocationById(id);

        const residents = await getCharactersByUrls(
            location.residents
        );

        res.render("pages/location-details", {
            location,
            residents
        });

    } catch (error) {

        res.status(404).render("pages/location-not-found");

    }

};

export {
    showLocations,
    showLocationDetails
};