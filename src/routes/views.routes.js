import { Router } from "express";
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";
import { ViewController } from "../controllers/views.controller.js";

const routerB = Router();


//routes

routerB.get("/", ViewController.renderHome);

routerB.get("/realtimeproducts", ViewController.rendeRealTimeProducts);

routerB.get("/chat", ViewController.renderChat);

routerB.get("/registro", showLoginView, ViewController.renderRegistro);

routerB.get("/login", showLoginView, ViewController.renderLogin);

routerB.get("/cambio-password", showLoginView, ViewController.renderCambioPassword);

routerB.get("/profile", checkUserAuthenticated, ViewController.renderProfile);

routerB.get("/forgot-password", ViewController.renderForgot);

routerB.get("/reset-password", ViewController.renderResetPass);


export {routerB as viewsRouter};