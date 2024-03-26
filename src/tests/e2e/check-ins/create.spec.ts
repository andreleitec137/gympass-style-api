import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '@/app'
import { createAndAuthenticateUser } from '../../utils/create-and-authenticate-user'
import { prisma } from '@/lib/prisma'

describe('Create Check-in (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a check-in', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const gym = await prisma.gym.create({
      data: {
        title: 'Test Gym',
        description: 'description',
        phone: '1234514341',
        latitude: -23.1685626,
        longitude: -46.8008695,
      },
    })

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/check-ins`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -23.1685626,
        longitude: -46.8008695,
      })

    expect(response.statusCode).toEqual(201)
  })
})
