import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'

describe('Refresh Token (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to refresh a token', async () => {
    await request(app.server).post('/users').send({
      name: 'TEST',
      email: 'email@teste.com',
      password: '123456',
    })

    const authResponse = await request(app.server).post('/sessions').send({
      email: 'email@teste.com',
      password: '123456',
    })

    const cookies = authResponse.get('Set-Cookie')
    const cookiesString = cookies !== undefined ? cookies.join('; ') : ''

    const response = await request(app.server)
      .patch('/token/refresh')
      .set('Cookie', [cookiesString])
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
    expect(response.get('Set-Cookie')).toEqual([
      expect.stringContaining('refreshToken='),
    ])
  })
})
