export class InvalidSpeciesError extends Error {
  statusCode = 400;
  constructor() {
    super('This species does not exist');
  }
}
