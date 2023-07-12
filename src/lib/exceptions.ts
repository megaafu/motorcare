export class ServerError extends Error {
  constructor(message = 'Could not reach the server') {
    super(message)
    this.name = 'Could not reach the server'
  }
}
