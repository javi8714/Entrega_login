import { Router } from "express"; 
import { productSDao } from "../dao/managers/index.js";
import { ProductsController } from "../controllers/products.controller.js";


const router = Router();

//const validateFields = (req,res,next)=>{
//    const productInfo = req.body
//    if (!productInfo.title || !productInfo.description || !productInfo.price || !productInfo.code || !productInfo.stock || !productInfo.status || !productInfo.category) {
//        return res.json({ status: "error", message: "Campos incompletos! Completar." })
//    } else {
//        next();
//    }
//};

// Obtengo los prod de acuerdo al limite de prod que ingrese
router.get("/", ProductsController.getProducts);
// Retorno el prod por id: http://localhost:8080
router.get("/:pid", ProductsController.getProduct);
// Doy de alta el producto
router.post("/", ProductsController.createProduct);
// Actualizo el producto segun id
router.put("/:pid", ProductsController.updatePrtoduct);
// Doy de baja el producto segun ID
router.delete("/:pid", ProductsController.deleteProduct);



export {router as productsRouter}


