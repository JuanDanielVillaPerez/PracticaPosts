'use strict'

const Comentario = use("App/Models/Comentario")

class ComentarioController {

  async index ({ request, response, view }) {

    return await Comentario.all();
  }

  async store ({ request, response }) {

    const input = request.all();
    await Comentario.create(input);
    return response.json({
      rer: true,
      message: "Registro insertado correctamente"
    })
  }

  async show ({ params, request, response, view }) {


  }

  async update ({ params, request, response }) {

    const input = request.all()

    await Comentario.query().where('id' , params.id).update(input)

    return response.json({
      rer:true,
      message: "Se a modificado correctamente"
    })
  }

  async destroy ({ params, request, response }) {

    const comentarios = await Comentario.findOrFail(params.id)
    await comentarios.delete()

    return response.json({
      rer:true,
      message: "El registro a sido eliminado"
    })
  }
}

module.exports = ComentarioController