import { Router } from "express";
import { UserModel } from "../models/user.model.js" 

const route = Router()

route.get('/', async (req,res) => {
    const resultado = await UserModel.find()
    res.send({paylod: resultado})
})

route.get('/:id',(req,res) => {
    const { id }= req.params
    res.send({mensaje:'Respondiendo desde Usuarios'})
})

export default route