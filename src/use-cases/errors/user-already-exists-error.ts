export class UserAlreadyExistsError extends Error {
  constructor() {
    super('Email already in use')
    this.name = 'UserAlreadyExistsError'
  }
}
