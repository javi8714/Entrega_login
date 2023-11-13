
import { Router } from "express"; 
import { ProductsController } from "../controllers/products.controller.js";

const routerA = Router()
<<<<<<< HEAD

=======
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c

routerA.get('/', ProductsController.getProducts)

routerA.get("/:pid", ProductsController.getProductID);

routerA.post("/", ProductsController.createProduct);

routerA.put("/:pid", ProductsController.updateProduct);

routerA.delete("/:pid", ProductsController.deleteProduct);


export {routerA as productsRouter}
