const Ajv = require('ajv');
const ajv = Ajv({ allErrors: true });

export interface Vaccin {
    _id?: number
    name: string
    sideEffects: string
    releaseDate: Date
    laboratory: number
    schema: Object
}

export class Vaccin {
    constructor(
        _id: number = null,
        name: string,
        sideEffects: string,
        releaseDate: Date,
        laboratory: number) {
        this._id = _id
        this.name = name
        this.sideEffects = sideEffects
        this.releaseDate = releaseDate
        this.laboratory = laboratory
    }
    validate() {
        return (ajv.validate(schema, this)) ? true : ajv.errors
    }
}
const schema = {
    type: 'object',
    required: ['name', 'sideEffects', 'releaseDate', 'laboratory'],
    properties: {
        _id: { type: "number" },
        name: { type: "string", minLength: 2, maxLength: 255 },
        sideEffects: { type: "string" },
        releaseDate: { type: "date" },
        laboratory: { type: "number" }
    }
}