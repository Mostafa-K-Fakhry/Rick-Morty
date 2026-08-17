import {
  getLocations,
  getLocationById,
  getCharactersByUrls,
} from "../services/apiService.js";

const showLocations = async (req, res) => {
  const filters = req.query;

  try {
    const data = await getLocations(filters);

    res.render("pages/locations", {
      locations: data.results,
      info: data.info,
      filters,
      error: null,
    });
  } catch (error) {
    res.render("pages/locations", {
      locations: [],
      info: null,
      filters,
      error: "No locations found.",
    });
  }
};

const showLocationDetails = async (req, res) => {

    const { id } = req.params;

    try {

        const location = await getLocationById(id);

        let residents = [];

        if (location.residents.length > 0) {

            try {

                residents = await getCharactersByUrls(
                    location.residents.slice(0, 6)
                );

            } catch (error) {

                console.log(
                    "Failed to load residents:",
                    error.message
                );

            }

        }

        res.render("pages/location-details", {
            location,
            residents
        });

    } catch (error) {

        console.log(
            "Failed to load location:",
            error.message
        );

        res.status(404).render(
            "pages/location-not-found"
        );

    }

};

export { showLocations, showLocationDetails };
