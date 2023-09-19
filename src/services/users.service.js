import { usersDao } from "../dao/managers/index.js";

export class UsersService{
    static getUserByEmail = async(email)=>{
        return await usersDao.getByEmail(email)
    };

    static saveUser = async(newUser)=>{
        return await usersDao.save(newUser)
    };

    static getUserByID = async(id)=>{
        return await usersDao.getById(id);
    };
}