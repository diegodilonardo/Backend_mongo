import mongoose from "mongoose"

const uri = 'mongodb+srv://diegodilonardo:a1llAJdC0uuRXKjJ@proyectobackend1.qhaxq.mongodb.net/?retryWrites=true&w=majority&appName=proyectobackend1'
const connectionMongo = async() => {
    try{
        await mongoose.connect(uri, {
        dbName: 'Users'
        
        })
        console.log('Conectado a la Base de Datos')
    } catch (e){
        console.log('Error al conectarse a la BD')
    }
  }
  export default connectionMongo