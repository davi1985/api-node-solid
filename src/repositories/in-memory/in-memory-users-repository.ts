import { UsersRepository } from '@/use-cases/users-repository'
import { Prisma, User } from '@prisma/client'

export class InMemoryUsersRepository implements UsersRepository {
  public readonly users: User[] = []

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email)

    return user ?? null
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.users.push(user)

    return user
  }
}
