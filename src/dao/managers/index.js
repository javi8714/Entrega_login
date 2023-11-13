import { ProductManagerMongo } from "./productManagerMongo.js"
import { CartManagerMongo } from "./cartManagerMongo.js";
import { connectDB } from "../../config/dbConnection..js";
import { UsersMongo } from "./users.mongo.js";
import { TicketsMongo } from "./ticketsMongo.js"; 



connectDB();

const productService = new ProductManagerMongo();
const cartService = new CartManagerMongo();
const usersService = new UsersMongo();
export const ticketsDao = new TicketsMongo();


export {productService, cartService, usersService}

