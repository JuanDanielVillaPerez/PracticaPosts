'use strict'

const Route = use('Route')

Route.post('/login','AuthController.login')
Route.resource('/users','UserController')
  .apiOnly()
  .validator(new Map([
     [['users.store'], ['StoreUser']]
  ]))

  
Route.resource('Post','PostController').apiOnly();
Route.resource('Comentario','ComentarioController').apiOnly();