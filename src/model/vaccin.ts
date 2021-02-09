const Ajv = require('ajv');
const ajv = Ajv({ allErrors: true });

export interface Vaccin {
    _id?: number
    name: string
    sideEffects: string
    releaseDate: Date
    schema: Object
}

export class Vaccin {
    constructor(
        _id: number = null,
        name: string,
        sideEffects: string,
        releaseDate: Date) {
        this._id = _id
        this.name = name
        this.sideEffects = sideEffects
        this.releaseDate = releaseDate
        this.schema = {
            type: 'object',
            required: ['name', 'sideEffects', 'releaseDate'],
            properties: {
                _id: { type: "number" },
                name: { type: "string", minLength: 2, maxLength: 255 },
                sideEffects: { type: "string" },
                releaseDate: { type: "date" }

            }
        }
    }
    validate() {
        return (ajv.validate(this.schema, this)) ? true : ajv.errors
    }
}

