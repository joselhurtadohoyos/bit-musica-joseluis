const mongoose = require('mongoose')

// mongodb+srv://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_NAME
// mongodb://127.0.0.1:27017/bit_musica
const conectarBaseDeDatos = async function () {
  await mongoose.connect('mongodb+srv://JOSE8327:JOSE8327@cluster0-k9fwn.mongodb.net/bit_musica',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('La conexión a la DB fue exitosa!')
}

module.exports = conectarBaseDeDatos