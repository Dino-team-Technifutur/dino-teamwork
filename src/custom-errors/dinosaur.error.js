export class InvalidDinosaurError extends Error {
  statusCode = 400;
  constructor() {
    super('This dinosaur does not exist');
  }
}
