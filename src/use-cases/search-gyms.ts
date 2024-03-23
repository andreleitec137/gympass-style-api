import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface SearchGymsUseCaseCaseRequest {
  query: string
  page: number
}

interface SearchGymsUseCaseCaseResponse {
  gyms: Gym[]
}

export class SearchGymsUseCaseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseCaseRequest): Promise<SearchGymsUseCaseCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return { gyms }
  }
}
