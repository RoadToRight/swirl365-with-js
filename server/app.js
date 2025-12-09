import dotenv from "dotenv";
import express from "express"
import dbConnection from "./dbConnection/dbConnection.js"
import userRoute from "./Routes/userRoutes.js"
import portfolioRouter from "./Routes/portfolioRoutes.js"
import cors from "cors"
import { errorMiddleware } from "./Middlewares/error.js";
import fileUpload from "express-fileupload";
const app = express();

dotenv.config({ path: "./config/.env" })
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    allowedHeaders:['Content-Type','Authorization']
}))
app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))

app.use("/api/v1/auth", userRoute)
app.use("/api/v1/creations", portfolioRouter)



dbConnection()
app.use(errorMiddleware)

export default app;