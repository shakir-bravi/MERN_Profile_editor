import chalk from "chalk";
import mongoose from "mongoose";
import { dbName } from "../constants.js";

export const DBConneection = async ()=>{
    try {

        console.log(chalk.yellow("\t\t\t Connecting............"));
        const db = await mongoose.connect(`${process.env.DB_URL}/${dbName}`)  ;
        console.log(chalk.bgGreen("** DataBase Conneection Successs Fullly !!"));
        console.log("Host : " , db.connection.host );
        console.log("Name : " , db.connection.name );
        
        
    } catch (error) {
        
        console.log(chalk.bgRed(" :) DataBase Conneection Faild :))"), chalk.red(error));
        
    }
}