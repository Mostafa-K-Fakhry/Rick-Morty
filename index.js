import express from "express";
import characterRoutes from "./routes/character.route.js";
import locationRoutes from "./routes/location.route.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", characterRoutes);
app.use("/", locationRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});