import { Router } from "express";
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";
import { ViewController } from "../controllers/views.controller.js";

const routerB = Router();


//routes

<<<<<<< HEAD
routerb.get("/", ViewController.renderHome);
routerb.get("/realtimeproducts", ViewController.rendeRealTimeProducts);
routerb.get("/chat", ViewController.renderChat);
routerb.get("/registro", showLoginView, ViewController.renderRegistro);
routerb.get("/login", showLoginView, ViewController.renderLogin);
routerb.get("/cambio-password", showLoginView, ViewController.renderCambioPassword);
routerb.get("/profile", checkUserAuthenticated, ViewController.renderProfile);
routerb.get("/forgot-password", ViewController.renderForgot);
routerb.get("/reset-password", ViewController.renderResetPass);
=======
routerB.get("/", ViewController.renderHome);
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c

routerB.get("/realtimeproducts", ViewController.rendeRealTimeProducts);

routerB.get("/chat", ViewController.renderChat);

routerB.get("/registro", showLoginView, ViewController.renderRegistro);

routerB.get("/login", showLoginView, ViewController.renderLogin);

routerB.get("/cambio-password", showLoginView, ViewController.renderCambioPassword);

routerB.get("/profile", checkUserAuthenticated, ViewController.renderProfile);

routerB.get("/forgot-password", ViewController.renderForgot);

routerB.get("/reset-password", ViewController.renderResetPass);


export {routerB as viewsRouter};