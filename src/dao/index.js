import { ProductManagerMongo } from "./mongo/productManagerMongo.js"
import { CartManagerMongo } from "./mongo/cartManagerMongo.js";
import { connectDB } from "../config/dbConnection.js";
import { UsersMongo } from "./managers/users.mongo.js";




connectDB();
const productService = new ProductManagerMongo();
const cartService = new CartManagerMongo();
const usersService = new UsersMongo();


export {productService, cartService,usersService }

