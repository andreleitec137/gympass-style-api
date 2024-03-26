import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { verifyJwt } from '@/http/middlewares/verify-jwt'
import { profile } from './profile'
import { refresh } from './refresh'

/*
Traduzir a rota sempre para entidades, oque isso quer dizer:
Invés de fazer um post auth, que significa estou criando um auth
Mudar para sessions pois fica com: "Estou criando uma sessão"

*/
export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)
  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
