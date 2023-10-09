import { Router } from 'express';
import { ProductsController } from '../controllers/products.controller.js';

const router = Router()

router.get('/', ProductsController.getProducts)

router.get("/:pid", ProductsController.getProductID);

router.post("/", ProductsController.createProduct);

router.put("/:pid", ProductsController.updateProduct);

router.delete("/:pid", ProductsController.deleteProduct);

export {router as productsRouter}