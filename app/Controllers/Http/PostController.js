'use strict'

const Post = use("App/Models/Post")




class PostController {

  //GET
  async index ({ request, response, view }) {

      return await Post.all();
  }

  //POST
  async store ({ request, response }) {

      const input = request.all();
      await Post.create(input);
      return response.json({
        rer: true,
        message: "Registro insertado correctamente"
      })
  }

  //GET
  async show ({ params, request, response, view }) {


  }

  //PUT
  async update ({ params, request, response }) {

    const input = request.all()

    await Post.query().where('id' , params.id).update(input)

    return response.json({
      rer:true,
      message: "Se a modificado correctamente"
    })
  }

  async destroy ({ params, request, response }) {

    const post = await Post.findOrFail(params.id)
    await post.delete()

    return response.json({
      rer:true,
      message: "El registro a sido eliminado"
    })

  }
}

module.exports = PostController