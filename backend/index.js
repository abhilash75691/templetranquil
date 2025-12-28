import express from "express";
import dotenv from"dotenv";
import databaseConnection from "./config/dtabase.js";
import  cookiParser from "cookie-parser";
import userRoute from "./routers/userRoute.js";
import templeRoute from "./routers/templeroute.js";
import cors from "cors";

dotenv.config({
    path:".env"
})
databaseConnection();
const app = express();

//middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookiParser());
const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));

//api
app.use("/api/v1/user",userRoute);
app.use("api/v1/temple",templeRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
})