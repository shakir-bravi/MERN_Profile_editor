import { DBConneection } from "./db/connection.db.js";
import dotenv from "dotenv";;
import { app } from "./app.js";


dotenv.config({path:".env"})

DBConneection()
.then(()=>{
app.listen(4000 ,()=>{
    console.log(" => App is Listening On http://localhost:4000");
    
})
}).catch(()=>{
    console.log("ERR)R On Index.js :: 14");
    
})