import { PrismaGymsRepository } from '@/repositories/prisma/primsa-gyms-repository'
import { FetchNearByGymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymsUseCase() {
  const prismaGymsRepository = new PrismaGymsRepository()
  const fetchNearByGymsUseCase = new FetchNearByGymsUseCase(
    prismaGymsRepository,
  )

  return fetchNearByGymsUseCase
}
