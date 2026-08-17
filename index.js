import express from "express";
import characterRoutes from "./routes/character.route.js";
import locationRoutes from "./routes/location.route.js";
import episodeRoutes from "./routes/episode.route.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", characterRoutes);
app.use("/", locationRoutes);
app.use("/", episodeRoutes);
app.get("/", (req, res) => {
    res.redirect("/characters");
});
app.use((req, res) => {
    res.status(404).render("pages/404");
});
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).render("pages/500");
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});