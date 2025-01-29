import mongoose, { Schema } from "mongoose";

const userCollection = "users";

const userSchemma = new Schema({
    nombre: String,
    apellido: String,
    age: Number,
    email: {
        type: String,
        require: true,
        unique: true,
        
    },
})

export const UserModel = mongoose.model(userCollection,userSchemma)