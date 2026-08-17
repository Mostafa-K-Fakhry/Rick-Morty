import express from "express";
import characterRoutes from "./routes/character.route.js";
import locationRoutes from "./routes/location.route.js";
import episodeRoutes from "./routes/episode.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));


// Routes

app.use("/", characterRoutes);

app.use("/", locationRoutes);

app.use("/", episodeRoutes);


// Default Route

app.get("/", (req, res) => {
    res.redirect("/characters");
});


// 404

app.use((req, res) => {
    res.status(404).render("pages/404");
});


// Global Error Handler

app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).render("pages/500");

});


// Local Development

if (!process.env.VERCEL) {

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

}


// Export for Vercel

export default app;