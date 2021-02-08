'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
    static get table(){

        return 'posts';
}

static get hidden(){
    return ['created_at', 'updated_at']
}

}

module.exports = Post
