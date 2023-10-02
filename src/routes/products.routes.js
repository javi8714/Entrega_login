import { Router } from 'express';
import { ProductsController } from '../controllers/products.controller.js';
import { checkRole, checkUserAuthenticated } from "../middlewares/auth.js";


const router = Router()

router.get('/', ProductsController.getProducts)
router.get("/:pid", ProductsController.getProductID);
router.post("/", checkUserAuthenticated, checkRole(["admin", "superadmin"]), ProductsController.createProduct);
router.put("/:pid", checkUserAuthenticated, ProductsController.updateProduct);
router.delete("/:pid", checkUserAuthenticated, checkRole(["admin"]), ProductsController.deleteProduct);

export {router as productsRouter}