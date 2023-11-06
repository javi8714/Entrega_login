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
        }
            let cart = this.carts.find((cart) => cart.id == id);
        if (!cart) {
            console.error('Carrito no encontrado');
            return;
        }
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
};