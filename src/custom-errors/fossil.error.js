export class InvalidFossilError extends Error {
    statusCode = 400;

    constructor(){
        super("This fossil does not exist");
    }
};