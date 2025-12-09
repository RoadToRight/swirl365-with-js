import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Swirl365"
    }).then(() => console.log("Database Connected")).catch(() => console.log("Some Error Occured While Connecting Database!"))
}

export default dbConnection;