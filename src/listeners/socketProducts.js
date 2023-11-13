import { ProductManagerMongo } from "../dao/managers/productManagerMongo.js";
const pm = new ProductManagerMongo()

const socketProducts = (socketServer) => {
    socketServer.on("connection", async (socket) => {
        console.log("client connected con ID:", socket.id)
        const listadeproductos = await pm.getProductsView()
        socketServer.emit("enviodeproducts", listadeproductos)

        socket.on("addProduct", async (obj) => {
            await pm.addProduct(obj)
            const listadeproductos = await pm.getProductsView()
            socketServer.emit("enviodeproducts", listadeproductos)
        })

        socket.on("deleteProduct", async (id) => {
            console.log(id)
            await pm.deleteProduct(id)
            const listadeproductos = await pm.getProductsView()
            socketServer.emit("enviodeproducts", listadeproductos)
        })
<<<<<<< HEAD
=======




>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c
    })
};

export default socketProducts;