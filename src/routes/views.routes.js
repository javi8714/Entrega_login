import { Router } from "express";
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";
import { ViewsController } from "../controllers/views.controller.js";

const routerb = Router();


//routes

routerb.get("/", ViewsController.renderHome);
routerb.get("/realtimeproducts", ViewsController.rendeRealTimeProducts);
routerb.get("/chat", ViewController.renderChat);
routerb.get("/registro", showLoginView, Viewsontroller.renderRegistro);
routerb.get("/login", showLoginView, ViewsController.renderLogin);
routerb.get("/cambio-password", showLoginView, ViewsController.renderCambioPassword);
routerb.get("/profile", checkUserAuthenticated, ViewsController.renderProfile);

export {routerb as viewsRouter};