import { Router } from "express";
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";
import { ViewController } from "../controllers/views.controller.js";

const routerb = Router();


//routes

routerb.get("/", ViewController.renderHome);
routerb.get("/realtimeproducts", ViewController.rendeRealTimeProducts);
routerb.get("/chat", ViewController.renderChat);
routerb.get("/registro", showLoginView, ViewController.renderRegistro);
routerb.get("/login", showLoginView, ViewController.renderLogin);
routerb.get("/cambio-password", showLoginView, ViewController.renderCambioPassword);
routerb.get("/profile", checkUserAuthenticated, ViewController.renderProfile);
routerb.get("/forgot-password", ViewController.renderForgot);
routerb.get("/reset-password", ViewController.renderResetPass);

export {routerb as viewsRouter};