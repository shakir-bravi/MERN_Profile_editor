import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors" ; 



const app = express() ; 
// App configuration

app.use(express.json({limit:"200kb"}))
app.use(express.urlencoded({limit:"200kb" , extended:true}))
app.use(express.static("public"))
app.use(cors())
app.use(cookieParser())

// Route Importing..
import { router } from "./routes/usr.route.js";

app.use("/api",router)





export {app}


