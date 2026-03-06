export class InvalidZoneError extends Error {
  statusCode = 400;
  constructor() {
    super('This zone does not exist');
  }
}
