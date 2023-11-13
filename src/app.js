import express from "express";
import {config} from "./config/config.js";
import { engine } from 'express-handlebars';
import path from "path";
import {__dirname} from "./utils.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { initializePassport } from "./config/passportConfig.js";
import passport from "passport";
import { viewsRouter } from "./routes/views.routes.js";
import { sessionsRouter } from "./routes/sessions.routes.js";
import { Server } from 'socket.io';
import { connectDB } from "./config/dbConnection..js";
import socketProducts from "./listeners/socketProducts.js"
import socketChat from './listeners/socketChat.js';
import { chatModel } from './dao/models/chat.models.js';
import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { generateUser } from './utils/helpers.js'; 
import { addLogger } from "./helpers/logger.js";
import { usersRouter } from "./routes/users.routes.js";
import { swaggerSpecs } from './config/swagger.config.js';
import swaggerUI from "swagger-ui-express";
<<<<<<< HEAD
=======

>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c


const port = config.server.port;
const app = express();
const logger = addLogger();

app.get("/",(req,res)=>{
    logger.silly("mensaje de nivel silly");
    logger.info("mensaje de nivel info");
    logger.debug("mensaje de nievel debug");
    logger.http("mensaje de nivel http");
    logger.warn("mensaje de nievl warn");
    logger.error("mensaje de nivel error");
    logger.verbose("mensaje de nievel vewrbose");
    res.send("peticion recibida");
});

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true})); //manejo de formularios de vistas
app.use(express.static(path.join(__dirname,"/public")));

<<<<<<< HEAD


=======
//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c

//configuracion de los sesiones
app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:config.server.secretSession,
    resave:true,
    saveUninitialized:true
}));

//configuracion de passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD

=======
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c
//acceso de routes
app.use(viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/users", usersRouter);
<<<<<<< HEAD
=======
app.use("/api/docs", swaggerUI.serve,swaggerUI.setup(swaggerSpecs));
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c
app.use(errorHandler);


const httpsServer = app.listen(port,()=>console.log(`Server esta funcionando en el puerto ${port}`));

//conectamos a la base de datos
connectDB();

<<<<<<< HEAD
//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));
=======
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c

//rutas
app.get("/",(req,res)=>{
    res.render("home")
});

app.post("/crearCookie",(req,res)=>{
    const loginInfo = req.body;
    res.cookie("infoUser",'{user:${loginInfo.email}}',{maxAge:50000}).send("Se recibio la informacion");
});

app.get("/leerCookkies",(req,res)=>{
    const cookies = req.cookies;
    res.send(cookies);
});

//ruta para generar la sesion de usuario
app.get("/login",(req,res)=>{
    const {username} = req.query;
    req.session.user={username, visitas:1}
    res.send("usuario registrado")
});

app.get("/visitas",(req,res)=>{
    console.log(req.session)
    if(req.session.user && req.session.user.username){
        req.session.user.visitas++;
        res.send("Ya existe el usuario")
    } else {
        res.send("necesitas resgistrarte")
    }
});

// Crear servidor de websocket
const socketServer = new Server(httpsServer);
let messages = [];



// Crear el canal de comunicacion, detectar socket del cliente
socketServer.on("connection", (socketConnected)=>{
    console.log(`Nuevo cliente conectado  ${socketConnected.id}`);
    // Capturar info del cliente
    socketConnected.on("messageKey", (data)=>{
        console.log(data);
        messages.push({userId:socketConnected.id,message:data});
    });

    

    socketConnected.on("nuevoProducto", (nuevoProd)=>{
        console.log(data);
       // messages.push({userId:socketConnected.id,message:data});

        // Enviar todos los mensajes a todos los clientes
        socketServer.emit("nuevoProducto", data);
    });


   // Maneja el evento 'authenticated'
   socket.on("authenticated", async (msg)=>{
    const messages = await chatModel.find();
    socket.emit("messageHistory", messages);
    socket.broadcast.emit("newUser",msg);
   });

   //recibir el mensaje del cliente
   socket.on("message",async(data)=>{
    console.log("data", data);
    const messageCreated = await chatModel.create(data);
    const messages = await chatModel.find();
    //cada vez que recibamos este mensaje, enviamos todos los mensajes actualizados a todos los clientes conectados
    servidorSocket.emit("messageHistory", messages);
    })
});

// Facker
app.get("/api/users", (req,res)=>{
    const cant = parseInt(req.query.cant) || 100;
    let users = [];
    for(let i=0;i<cant;i++){
        const user = generateUser();
        users.push(user);
    }
    res.json({status:"success", data:users});
});


// Logger
app.get("/operacionSencilla",(req,res)=>{
    let sum=0;
    for(let i=0;i<1000;i++){
        sum+=i;
    }
    res.send(`La suma es igual a ${sum}`);
});

app.get("/operacionCompleja",(req,res)=>{
    let sum=0;
    for(let i=0;i<5e7;i++){//50.000.000
        sum+=i;
    }
    res.send(`La suma es igual a ${sum}`);
});

//endpoint para acceder a la documentacion de la api
app.use("/api/docs",swaggerUI.serve,swaggerUI.setup(swaggerSpecs));

<<<<<<< HEAD
export {app}
=======


>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c



