'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comentario extends Model {
    static get table(){

        return 'comentarios';
}

static get hidden(){
    return ['created_at', 'updated_at']
      }
  }

module.exports = Comentario
