import express from "express"
import { addVideo, getPortfolio, getCollection, updateVideo, deleteVideo } from "../controllers/portfolioController.js";
import { auth } from "../Middlewares/auth.js";
import { adminCheck } from "../Middlewares/admin.js";

const app = express.Router();

app.post("/add", addVideo);
app.get("/getAll", getPortfolio);
app.get("/portfolio/:type", getCollection)
app.put("/update/:id", updateVideo);
app.delete("/delete/:id", deleteVideo);

export default app;