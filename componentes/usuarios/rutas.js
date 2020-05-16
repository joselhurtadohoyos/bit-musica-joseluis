const express = require('express')
const router = express.Router()
const Usuario = require('./modelo')

/**
 * Consulta de todas los usuarios
 * GET /usuarios
 */
router.get('/', function (solicitud, respuesta) {
  Usuario.find(function (error, usuarios) {
    if (error) {
      console.error('Error consultando usuarios: ', error)
      respuesta.status(500).json({ mensaje: 'Error consultando los usuarios.' })
    } else {
      respuesta.status(200).json(usuarios)
    }
  })
})

/**
 * Consulta un usuario por su ID
 * GET /usuarios/:id
 */
router.get('/:id', function (solicitud, respuesta) {
  Usuario.findById(solicitud.params.id, function (error, usuario) {
    if (error) {
      console.error('Error consultando usuario por el ID: ', error)
      respuesta.status(500).json({ mensaje: 'Error consultando la canción.' })
    } else {
      respuesta.status(200).json(usuario)
    }
  })
})

/**
 * Crea un nuevo usuario
 * POST /usuarios
 */
router.post('/', function (solicitud, respuesta) {
  const nuevoUsuario = new Usuario(solicitud.body)
  nuevoUsuario.save(function (error, usuariosCreado) {
    if (error) {
      console.error('Error creando canción: ', error)
      respuesta.status(500).json({ mensaje: 'Error actualizando el usuario.' })
    } else {
      respuesta.status(201).json(usuariosCreado)
    }
  })
})

/**
 * Actualiza un usuario por su ID
 * PUT /usuario/:id
 */
router.put('/:id', function (solicitud, respuesta) {
  Usuario.findByIdAndUpdate(solicitud.params.id, solicitud.body, function (error, usuarioViejo) {
    if (error) {
      console.error('Error actualizando el usuario: ', error)
      respuesta.status(500).json({ mensaje: usuarioViejo })
    } else {
      Usuario.findById(solicitud.params.id, function (error, usuario) {
        if (error) {
          console.error('Error consultando el usuario actualizado: ', error)
          respuesta.status(500).json({ mensaje: 'Error consultando el usuario actualizado.' })
        } else {
          respuesta.status(200).json(usuario)
        }
      })
    }
  })
})

/**
 * Actualiza una usuario por su ID
 * DELETE /usuario/:id
 */
router.delete('/:id', function (solicitud, respuesta) {
  Usuario.findByIdAndDelete(solicitud.params.id, function (error, usuarioEliminado) {
    if (error) {
      console.error(`Error eliminando usuario por el ID ${solicitud.params.id} `, error)
      respuesta.status(500).json({ mensaje: 'El usuario NO ha podido ser eliminado.' })
    } else {
      respuesta.status(200).json({ mensaje: 'El usuario ha sido eliminado.' })
    }
  })
})

module.exports = router