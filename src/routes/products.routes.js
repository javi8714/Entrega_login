
import { Router } from "express"; 
import { ProductsController } from "../controllers/products.controller.js";

const routerA = Router()


routerA.get('/', ProductsController.getProducts)

routerA.get("/:pid", ProductsController.getProductID);

routerA.post("/", ProductsController.createProduct);

routerA.put("/:pid", ProductsController.updateProduct);

routerA.delete("/:pid", ProductsController.deleteProduct);


export {routerA as productsRouter}
