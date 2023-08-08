import mongoose from "mongoose";
import {config} from "./configdb.js";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(config.mongo.url);
        consdole.log("Conectada a la base de datos");

    }catch(error){
        console.log('Error al querer conectar a la base de datros ${error.,message}');
    }
}