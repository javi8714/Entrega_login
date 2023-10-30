import { Router } from "express";
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";
import { ViewsController } from "../controllers/views.controller.js";

const routerB = Router();


//routes

routerB.get("/", ViewsController.renderHome);

routerB.get("/realtimeproducts", ViewsController.rendeRealTimeProducts);

routerB.get("/chat", ViewController.renderChat);

routerB.get("/registro", showLoginView, Viewsontroller.renderRegistro);

routerB.get("/login", showLoginView, ViewsController.renderLogin);

routerB.get("/cambio-password", showLoginView, ViewsController.renderCambioPassword);

routerB.get("/profile", checkUserAuthenticated, ViewsController.renderProfile);

routerB.get("/forgot-password", ViewController.renderForgot);

routerB.get("/reset-password", ViewController.renderResetPass);


export {routerB as viewsRouter};