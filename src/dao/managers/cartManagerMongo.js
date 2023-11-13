<<<<<<< HEAD
import { cartModel } from "../models/carts.model.js"

export  class CartManagerMongo {
    getCarts = async () => {
        try {
            const carts = await cartModel.find().lean();
            return carts;
        } catch (err) {
            console.error('Error al obtener los carritos:', err.message);
            return [];
=======
import { cartModel } from "../models/carts.model.js";


export class CartManagerMongo{
  constructor(){
      this.nodel=cartModel;
    
  };
   
  
  async getAll(){
    try {
        const carts = await this.model.find();
        return carts;
    } catch (error) {
        throw error;
    }
  };

  async getCartById(id) {
    try {
        if (this.existsFile()) {
            let data = await fs.promises.readFile(this.path, 'utf-8');
            this.carts = JSON.parse(data);
        } else {
            this.carts = [];
            throw new Error('No se encontro el archivo de carrito, se cargará un arreglo vacío.')
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c
        }
    };

    getCartById = async (cartId) => {
        try {
            const cart = await cartModel.findById(cartId)
            return cart;
        } catch (err) {
            console.error('Error al obtener el carrito por ID:', err.message);
            return err;
        }
<<<<<<< HEAD
    };

    addCart = async (products) => {
        try {
            let cartData = {};
            if (products && products.length > 0) {
                cartData.products = products;
            }
            const cart = await cartModel.create(cartData);
            return cart;
        } catch (err) {
            console.error('Error al crear el carrito:', err.message);
            return err;
        }
    };

    addProductInCart = async (cid, obj) => {
        try {
            const filter = { _id: cid, "products._id": obj._id };
            const cart = await cartModel.findById(cid);
            const findProduct = cart.products.some((product) => product._id.toString() === obj._id);
            if (findProduct) {
                const update = { $inc: { "products.$.quantity": obj.quantity } };
                await cartModel.updateOne(filter, update);
            } else {
                const update = { $push: { products: { _id: obj._id, quantity: obj.quantity } } };
                await cartModel.updateOne({ _id: cid }, update);
            }
            return await cartModel.findById(cid);
        } catch (err) {
            console.error('Error al agregar el producto al carrito:', err.message);
            return err;
        }
    };

    deleteProductInCart = async (cid, products) => {
        try {
            return await cartModel.findOneAndUpdate(
                { _id: cid },
                { products },
                { new: true })
=======
        return cart;
      } catch (error) {
        throw new Error(error.message);
      }
    };

    async save() {
    try {
        const cartCreation = await this.model.create({});
        return cartCreation;
    } catch (error) {
        throw error;
    }
  };

    deleteProductInCart = async (cid, products) => {
        try {
        return await cartModel.findOneAndUpdate(
            { _id: cid },
            { products },
            { new: true })
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c
        } catch (err) {
            return err
        }
    }

    updateOneProduct = async (cid, products) => {
        await cartModel.updateOne(
            { _id: cid },
            { products })
        return await cartModel.findOne({ _id: cid })
    }
<<<<<<< HEAD
};

 
=======
};
>>>>>>> bd896478c799f9a9ea99440a64c99bb64ae0ca3c
