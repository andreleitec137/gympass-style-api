import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { profile } from './controllers/profile'
import { verifyJwt } from './controllers/middlewares/verify-jwt'

/*
Traduzir a rota sempre para entidades, oque isso quer dizer:
Invés de fazer um post auth, que significa estou criando um auth
Mudar para sessions pois fica com: "Estou criando uma sessão"

*/
export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
