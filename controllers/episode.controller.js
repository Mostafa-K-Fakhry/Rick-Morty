import {
    getEpisodes,
    getEpisodeById,
    getCharactersByUrls
} from "../services/apiService.js";

const showEpisodes = async (req, res) => {

    const filters = req.query;

    try {

        const data = await getEpisodes(filters);

        res.render("pages/episodes", {
            episodes: data.results,
            info: data.info,
            filters,
            error: null
        });

    } catch (error) {

        console.log(
            "Failed to load episodes:",
            error.message
        );

        res.render("pages/episodes", {
            episodes: [],
            info: null,
            filters,
            error: "No episodes found."
        });

    }

};

const showEpisodeDetails = async (req, res) => {

    const { id } = req.params;

    try {

        const episode = await getEpisodeById(id);

        let characters = [];

        if (episode.characters.length > 0) {

            try {

                characters = await getCharactersByUrls(
                    episode.characters.slice(0, 6)
                );

            } catch (error) {

                console.log(
                    "Failed to load episode characters:",
                    error.message
                );

            }

        }

        res.render("pages/episode-details", {
            episode,
            characters
        });

    } catch (error) {

        console.log(
            "Failed to load episode:",
            error.message
        );

        res.status(404).render(
            "pages/episode-not-found"
        );

    }

};



export {
    showEpisodes,
    showEpisodeDetails
};