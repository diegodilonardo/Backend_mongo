import express from 'express'
import UsuariosRoute from './routes/usuarios.router.js'
import connectionMongo from './connection/mongo.js'

const app = express()

connectionMongo()

app.use('/api/usuarios', UsuariosRoute)

app.listen(8080, () => {
    console.log('Servidor conectado en puerto 8080')
})

 
