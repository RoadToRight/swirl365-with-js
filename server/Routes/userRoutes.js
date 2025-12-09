import express from "express"
import { auth } from "../Middlewares/auth.js";
import { adminCheck } from "../Middlewares/admin.js";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/userControllers.js";

const app = express.Router();

app.post("/create",createUser)
app.delete("/delete/:id",deleteUser)
app.get("/getUsers",getUsers);
app.put("/update",updateUser)

export default app;    