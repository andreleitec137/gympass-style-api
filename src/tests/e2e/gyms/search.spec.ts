import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateUser } from '../../utils/create-and-authenticate-user'

describe('Search Gyms (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to search a gym', async () => {
    const { token } = await createAndAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Gym',
        description: 'description',
        phone: '1234514341',
        latitude: -23.1685626,
        longitude: -46.8008695,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Gym 2',
        description: 'description',
        phone: '1234514341',
        latitude: -23.1685626,
        longitude: -46.8008695,
      })

    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        q: '2',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'Test Gym 2',
      }),
    ])
  })
})
